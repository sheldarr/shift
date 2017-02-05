const express = require('express');
const fs = require('fs-extra');

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

        recipes.push(request.body);

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