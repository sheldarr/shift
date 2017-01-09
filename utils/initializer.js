const fs = require('fs-extra');
const path = require('path');
const winston = require('winston');

winston.add(winston.transports.File, {
    filename: path.resolve(__dirname, 'logs', 'initializer.log')
});

winston.info('Initialization started');

fs.copy(path.normalize('./initial-data'), path.normalize('./data'), function(error) {
    if (error) {
        winston.error(error);
        process.exit(1);
    }

    winston.info('Initialization ended successfully');
});
