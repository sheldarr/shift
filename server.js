const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const process = require('process');
const winston = require('winston');

const patientsApi = require('./src/backend/patientsApi');
const productsApi = require('./src/backend/productsApi');

const port = 3030;

winston.add(winston.transports.File, {filename: path.resolve(__dirname, 'var', 'logs', 'server.log')});

const apiLogStream = fs.createWriteStream(path.resolve(__dirname, 'var', 'logs', 'api.log'), {
    flags: 'a'
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

app.use(morgan('combined', {
    stream: apiLogStream
}));

app.use('/bin', express.static('bin'));
app.use('/public', express.static('public'));

app.use('/api', patientsApi);
app.use('/api', productsApi);

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    winston.info(`PID ${process.pid} Server is running on port: ${port}`);
});
