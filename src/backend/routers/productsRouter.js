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

        if (isNaN(product.energyValue)) {
            validationErrors.push('energyValue');
        }

        if (isNaN(product.protein)) {
            validationErrors.push('protein');
        }

        if (isNaN(product.fat)) {
            validationErrors.push('fat');
        }

        if (isNaN(product.carbohydrates)) {
            validationErrors.push('carbohydrates');
        }

        if (isNaN(product.fiber)) {
            validationErrors.push('fiber');
        }

        if (isNaN(product.sodium)) {
            validationErrors.push('sodium');
        }

        if (isNaN(product.potassium)) {
            validationErrors.push('potassium');
        }

        if (isNaN(product.calcium)) {
            validationErrors.push('calcium');
        }

        if (isNaN(product.phosphorus)) {
            validationErrors.push('phosphorus');
        }

        if (isNaN(product.iron)) {
            validationErrors.push('iron');
        }

        if (isNaN(product.magnesium)) {
            validationErrors.push('magnesium');
        }

        if (isNaN(product.vitaminA)) {
            validationErrors.push('vitaminA');
        }

        if (isNaN(product.betaCarotene)) {
            validationErrors.push('betaCarotene');
        }

        if (isNaN(product.vitaminE)) {
            validationErrors.push('vitaminE');
        }

        if (isNaN(product.thiamine)) {
            validationErrors.push('thiamine');
        }

        if (isNaN(product.riboflavin)) {
            validationErrors.push('riboflavin');
        }

        if (isNaN(product.niacin)) {
            validationErrors.push('niacin');
        }
        
        if (isNaN(product.vitaminC)) {
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
