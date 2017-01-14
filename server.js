const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const credentialsProvider = require('./src/backend/credentialsProvider');
const express = require('express');
const session = require('express-session');
const fs = require('fs-extra');
const http = require('http');
const https = require('https');
const internationalization = require('./src/backend/middleware/internationalization');
const errorHandler = require('./src/backend/middleware/errorHandler');
const LocalStrategy = require('passport-local').Strategy;
const morgan = require('morgan');
const nconf = require('nconf');
const path = require('path');
const passport = require('passport');
const process = require('process');
const usersRepository = require('./src/backend/repositories/usersRepository');
const winston = require('winston');

const authRouter = require('./src/backend/routers/authRouter');
const patientsRouter = require('./src/backend/routers/patientsRouter');
const productsRouter = require('./src/backend/routers/productsRouter');
const resourcesRouter = require('./src/backend/routers/resourcesRouter');

nconf.env().argv().file(`./config/${process.env.NODE_ENV}.json`);

nconf.required([
    'NODE_ENV',
    'server:port',
    'server:https',
    'logs:api:enabled',
    'logs:api:filename',
    'logs:api:format',
    'logs:server:enabled',
    'logs:server:filename'
]);

if (nconf.get('logs:server:enabled') !== 'test') {
    winston.add(winston.transports.File, {
        filename: path.normalize(`./logs/${nconf.get('logs:server:filename')}`)
    });
}

const application = express();

if (nconf.get('logs:api:enabled')) {
    const logStream = fs.createWriteStream(path.normalize(`./logs/${nconf.get('logs:api:filename')}`), {flags: 'a'});
    application.use(morgan(nconf.get('logs:api:format'), {stream: logStream}));
}

application.use(cookieParser());
application.use(bodyParser.urlencoded({extended: true}));
application.use(bodyParser.json());
application.use(session({resave: true, saveUninitialized: true, secret: 'keyboard cat'}));
application.use(passport.initialize());
application.use(passport.session());

application.use(internationalization);

application.use('/build', express.static('build'));
application.use('/public', express.static('public'));

application.use('/', authRouter);
application.use('/api', patientsRouter);
application.use('/api', productsRouter);
application.use('/api', resourcesRouter);

const verifyUser = (username, password, done) => {
    const user = usersRepository.getByUsernameAndPassword(username, password);

    if (user) {
        return done(null, user);
    }

    return done(null, false);
};

const localStrategy = new LocalStrategy(verifyUser);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((serializedUser, done) => {
    const user = usersRepository.getById(serializedUser.id);

    if (user) {
        return done(null, user);
    }

    return done(null, false);
});

passport.use(localStrategy);

application.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

application.use(errorHandler);

let server;
const httpsEnabled = nconf.get('server:https');
const port = nconf.get('server:port');

if (httpsEnabled) {
    const credentials = credentialsProvider.get();

    server = https.createServer(credentials, application);
} else {
    server = http.createServer(application);
}

server.listen(port, () => {
    winston.info(`PID ${process.pid} ${httpsEnabled
        ? 'https'
        : 'http'} server is running on port: ${port}`);
});

module.exports = server;