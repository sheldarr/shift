const express = require('express');
const fs = require('fs-extra');
const uuid = require('uuid');

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

        const product = request.body;

        const validationErrors = [];

        if (!product.name) {
            validationErrors.push('name');
        }

        if (isNaN(parseFloat(product.energyValue))) {
            validationErrors.push('energyValue');
        }

        if (isNaN(parseFloat(product.protein))) {
            validationErrors.push('protein');
        }

        if (isNaN(parseFloat(product.fat))) {
            validationErrors.push('fat');
        }

        if (isNaN(parseFloat(product.carbohydrates))) {
            validationErrors.push('carbohydrates');
        }

        if (isNaN(parseFloat(product.fiber))) {
            validationErrors.push('fiber');
        }

        if (isNaN(parseFloat(product.sodium))) {
            validationErrors.push('sodium');
        }

        if (isNaN(parseFloat(product.potassium))) {
            validationErrors.push('potassium');
        }

        if (isNaN(parseFloat(product.calcium))) {
            validationErrors.push('calcium');
        }

        if (isNaN(parseFloat(product.phosphorus))) {
            validationErrors.push('phosphorus');
        }

        if (isNaN(parseFloat(product.iron))) {
            validationErrors.push('iron');
        }

        if (isNaN(parseFloat(product.magnesium))) {
            validationErrors.push('magnesium');
        }

        if (isNaN(parseFloat(product.vitaminA))) {
            validationErrors.push('vitaminA');
        }

        if (isNaN(parseFloat(product.betaCarotene))) {
            validationErrors.push('betaCarotene');
        }

        if (isNaN(parseFloat(product.vitaminE))) {
            validationErrors.push('vitaminE');
        }

        if (isNaN(parseFloat(product.thiamine))) {
            validationErrors.push('thiamine');
        }

        if (isNaN(parseFloat(product.riboflavin))) {
            validationErrors.push('riboflavin');
        }

        if (isNaN(parseFloat(product.niacin))) {
            validationErrors.push('niacin');
        }

        if (isNaN(parseFloat(product.vitaminC))) {
            validationErrors.push('vitaminC');
        }

        if (validationErrors.length) {
            response.status(400).json(validationErrors);
            return;
        }

        product.id = uuid.v4();

        products.push(product);

        fs.writeJson('./data/products.json', products);

        response.status(201).json(product);
    });
});

module.exports = productsRouter;
