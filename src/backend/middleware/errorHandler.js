const winston = require('winston');

const errorHandler = (error, request, response, next) => {
    if (response.headersSent) {
        return next(error);
    }

    winston.error(error);

    response.status(500);
};

module.exports = errorHandler;