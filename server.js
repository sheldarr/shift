const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const credentialsProvider = require('./src/backend/credentialsProvider');
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const i18n = require('i18n');
const morgan = require('morgan');
const path = require('path');
const process = require('process');
const winston = require('winston');

const patientsRouter = require('./src/backend/routers/patientsRouter');
const productsRouter = require('./src/backend/routers/productsRouter');
const resourcesRouter = require('./src/backend/routers/resourcesRouter');

const httpPort = 3030;
const httpsPort = 3033;

i18n.configure({
    autoReload: true,
    cookie: 'language',
    defaultLocale: 'pl',
    directory: path.resolve(__dirname, 'var', 'locales'),
    logDebugFn (message) {
        winston.debug(message);
    },
    logWarnFn (message) {
        winston.warn(message);
    },
    logErrorFn (message) {
        winston.error(message);
    },
    objectNotation: true
});

winston.add(winston.transports.File, {
    filename: path.resolve(__dirname, 'var', 'logs', 'server.log')
});

const apiLogStream = fs.createWriteStream(path.resolve(__dirname, 'var', 'logs', 'api.log'), {
    flags: 'a'
});

const application = express();

application.use(bodyParser.urlencoded({
    extended: true
}));
application.use(bodyParser.json());
application.use(cookieParser());
application.use(i18n.init);

application.use(morgan('combined', {
    stream: apiLogStream
}));

application.use('/bin', express.static('bin'));
application.use('/public', express.static('public'));

application.use('/api', patientsRouter);
application.use('/api', productsRouter);
application.use('/api', resourcesRouter);

application.get('*', (request, response) => {
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
