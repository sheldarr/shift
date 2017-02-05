const fs = require('fs-extra');
const path = require('path');
const winston = require('winston');

const run = (done) => {
    fs.copy(path.normalize('./initial-data'), path.normalize('./data'), function(error) {
        if (error) {
            winston.error(error);
        }

        done();
    });
};

module.exports = {
    run
};

if (!module.parent) {
    run(() => {});
}
