const i18n = require('i18n');
const path = require('path');
const winston = require('winston');

i18n.configure({
    autoReload: true,
    cookie: 'language',
    defaultLocale: 'pl',
    directory: path.resolve(__dirname, '../../..', 'locales'),
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

module.exports = i18n.init;
