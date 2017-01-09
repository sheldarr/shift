const express = require('express');
const fs = require('fs-extra');

const productsRouter = new express.Router();

productsRouter.get('/product', (request, response, next) => {
    fs.readJson('./data/products.json', 'utf8', (error, products) => {
        if (error) {
            return next(error);
        }

        response.json(products);
    });
});

productsRouter.post('/product/', (request, response, next) => {
    fs.readJson('./data/products.json', 'utf8', (error, products) => {
        if (error) {
            return next(error);
        }

        products.push(request.body);

        fs.writeJson('./data/products.json', products);

        response.sendStatus(200);
    });
});

module.exports = productsRouter;
