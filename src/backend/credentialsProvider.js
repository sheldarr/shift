const fs = require('fs-extra');
const path = require('path');
const winston = require('winston');

const credentialsProvider = {
    get () {
        try {
            const cert = fs.readFileSync(path.normalize('../../certs/cert.pem'), 'utf8');
            const key = fs.readFileSync(path.normalize('../../certs/key.pem'), 'utf8');

            return {
                cert,
                key
            };
        } catch (error) {
            winston.warn(error);
        }
    }
};

module.exports = credentialsProvider;
