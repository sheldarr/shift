const fs = require('fs-extra');
const path = require('path');
const winston = require('winston');

fs.copy(path.normalize('./initial-data'), path.normalize('./data'), function(error) {
    if (error) {
        winston.error(error);
        process.exit(1);
    }
});
