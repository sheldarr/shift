const BasicStrategy = require('passport-http').BasicStrategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const credentialsProvider = require('./src/backend/credentialsProvider');
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const internationalization = require('./src/backend/middleware/internationalization');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const process = require('process');
const session = require('express-session');
const winston = require('winston');

const authRouter = require('./src/backend/routers/authRouter');
const patientsRouter = require('./src/backend/routers/patientsRouter');
const productsRouter = require('./src/backend/routers/productsRouter');
const resourcesRouter = require('./src/backend/routers/resourcesRouter');

const httpPort = 3030;
const httpsPort = 3033;

winston.add(winston.transports.File, {
    filename: path.resolve(__dirname, 'var', 'logs', 'server.log')
});

const apiLogStream = fs.createWriteStream(path.resolve(__dirname, 'var', 'logs', 'api.log'), {
    flags: 'a'
});

const application = express();

application.use(morgan('combined', {
    stream: apiLogStream
}));

application.use(bodyParser.urlencoded({
    extended: true
}));
application.use(bodyParser.json());
application.use(cookieParser());
application.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));
application.use(passport.initialize());
application.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, {id});
});

application.use(internationalization);

application.use('/bin', express.static('bin'));
application.use('/public', express.static('public'));

application.use('/', authRouter);
application.use('/api', patientsRouter);
application.use('/api', productsRouter);
application.use('/api', resourcesRouter);

const basicStrategy = new BasicStrategy((username, password, done) => {
    return done(null, {
        id: '1234-5678-8765-4321',
        username,
        password
    });
});

passport.use(basicStrategy);

application.get('*', (request, response) => {
    winston.info(`Get ${JSON.stringify(request.user)}`);
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

application.use((error, request, response, next) => {
    if (response.headersSent) {
        return next(error);
    }

    winston.error(error);

    response.status(500);
});

const httpServer = http.createServer(application);

httpServer.listen(httpPort, () => {
    winston.info(`PID ${process.pid} Http server is running on port: ${httpPort}`);
});

const credentials = credentialsProvider.get();

if (credentials) {
    const httpsServer = https.createServer(credentials, application);

    httpsServer.listen(httpsPort, () => {
        winston.info(`PID ${process.pid} Https server is running on port: ${httpsPort}`);
    });
}
