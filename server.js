const express = require('express');
const path = require('path');
const process = require('process');
const winston = require('winston');

const port = 3030;

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: 'server.log'
        })
    ]
});

const app = express();

app.use('/bin', express.static('bin'));
app.use('/public', express.static('public'));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    logger.info(`PID ${process.pid} Server is running on port: ${port}`);
});
