const express = require('express');
const fs = require('fs-extra');
const uuid = require('uuid');

const recipesRouter = new express.Router();

recipesRouter.get('/recipes', (request, response, next) => {
    fs.readJson('./data/recipes.json', 'utf8', (error, recipes) => {
        if (error) {
            return next(error);
        }

        response.json(recipes);
    });
});

recipesRouter.get('/recipes/:id', (request, response, next) => {
    fs.readJson('./data/recipes.json', 'utf8', (error, recipes) => {
        if (error) {
            return next(error);
        }

        const recipe = recipes.find((recipes) => {
            return recipes.id === request.params.id;
        });

        if (!recipe) {
            response.sendStatus(404);
            return;
        }

        response.json(recipe);
    });
});

recipesRouter.post('/recipes/', (request, response, next) => {
    fs.readJson('./data/recipes.json', 'utf8', (error, recipes) => {
        if (error) {
            return next(error);
        }

            if (error) {
            return next(error);
        }

        const recipe = request.body;

        const validationErrors = [];

        if (!recipe.name) {
            validationErrors.push('name');
        }

        if (validationErrors.length) {
            response.status(400).json(validationErrors);
            return;
        }

        recipe.id = uuid.v4();

        recipes.push(recipe);

        fs.writeJson('./data/recipes.json', recipes);

        response.sendStatus(200);
    });
});

recipesRouter.delete('/recipes/:id', (request, response, next) => {
    fs.readJson('./data/recipes.json', 'utf8', (error, recipes) => {
        if (error) {
            return next(error);
        }

        const recipe = recipes.find((recipes) => {
            return recipes.id === request.params.id;
        });

        if (!recipe) {
            response.sendStatus(404);
            return;
        }

        recipes.splice(recipes.indexOf(recipe), 1);

        fs.writeJson('./data/recipes.json', recipes);

        response.sendStatus(200);
    });
});

module.exports = recipesRouter;