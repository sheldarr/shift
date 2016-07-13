const express = require('express');
const fs = require('fs');

const router = new express.Router();

router.get('/product', (request, response, next) => {
    fs.readFile('./var/data/products.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        response.json(JSON.parse(data));
    });
});

router.post('/product/', (request, response, next) => {
    fs.readFile('./var/data/products.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const products = JSON.parse(data);

        products.push(request.body);

        fs.writeFile('./var/data/products.json', JSON.stringify(products));

        response.sendStatus(200);
    });
});

module.exports = router;
