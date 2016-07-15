const express = require('express');
const passport = require('passport');
const winston = require('winston');

const authRouter = new express.Router();

authRouter.get('/auth/user', (request, response) => {
    if (request.user) {
        response.json(request.user);
        return;
    }

    return response.json({});
});

authRouter.get('/auth/basic', passport.authenticate('basic'), (request, response) => {
    winston.info(`Basic Login ${JSON.stringify(request.user)}`);
    response.redirect('/');
});

authRouter.post('/auth/local', passport.authenticate('basic'), (request, response) => {
    winston.info(`Local Login ${JSON.stringify(request.user)}`);
    response.redirect('/');
});

authRouter.get('/auth/logout', (request, response) => {
    winston.info(`Logout ${request.user}`);

    request.logOut();
    response.redirect('/');
});

module.exports = authRouter;
