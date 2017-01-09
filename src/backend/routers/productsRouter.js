const express = require('express');
const fs = require('fs');

const productsRouter = new express.Router();

productsRouter.get('/product', (request, response, next) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        response.json(JSON.parse(data));
    });
});

productsRouter.post('/product/', (request, response, next) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            return next(error);
        }

        const products = JSON.parse(data);

        products.push(request.body);

        fs.writeFile('./data/products.json', JSON.stringify(products));

        response.sendStatus(200);
    });
});

module.exports = productsRouter;
