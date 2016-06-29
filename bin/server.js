const express = require('express');
const path = require('path');
const process = require('process');
const winston = require('winston');

const port = 3030;

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

const app = express();

app.use('/bin', express.static(__dirname + '/bin'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    logger.info(`PID ${process.pid} Server is running on port: ${port}`);
});
