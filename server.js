const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
const i18n = require('i18n');
const morgan = require('morgan');
const path = require('path');
const process = require('process');
const winston = require('winston');

const patientsApi = require('./src/backend/patientsApi');
const productsApi = require('./src/backend/productsApi');
const resourcesApi = require('./src/backend/resourcesApi');

const port = 3030;

i18n.configure({
    cookie: 'language',
    defaultLocale: 'pl',
    directory: path.resolve(__dirname, 'var', 'locales'),
    logDebugFn(message) {
        winston.debug(message);
    },
    logWarnFn(message) {
        winston.warn(message);
    },
    logErrorFn(message) {
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

application.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    next();
});

application.use(morgan('combined', {
    stream: apiLogStream
}));

application.use('/bin', express.static('bin'));
application.use('/public', express.static('public'));

application.use('/api', patientsApi);
application.use('/api', productsApi);
application.use('/api', resourcesApi);

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

application.listen(port, () => {
    winston.info(`PID ${process.pid} Server is running on port: ${port}`);
});
