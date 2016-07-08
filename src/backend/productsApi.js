const express = require('express');
const fs = require('fs');
const winston = require('winston');

const router = new express.Router();

router.get('/product', (request, response) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        response.json(JSON.parse(data));
    });
});

router.post('/product/', (request, response) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            winston.error(error);
        }

        const products = JSON.parse(data);

        products.push(request.body);

        fs.writeFile('./data/products.json', JSON.stringify(products));

        response.sendStatus(200);
    });
});

module.exports = router;
