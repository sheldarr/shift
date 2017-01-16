const fs = require('fs-extra');
const path = require('path');
const winston = require('winston');

const run = () => {
    fs.copy(path.normalize('./initial-data'), path.normalize('./data'), function(error) {
        if (error) {
            winston.error(error);
        }
    });
};

if(module.parent) {
    module.exports = {run};
    process.exit(0);
}

run();