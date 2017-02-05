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

module.exports = recipesRouter;
