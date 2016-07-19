const express = require('express');
const passport = require('passport');
const winston = require('winston');

const authRouter = new express.Router();
const redirects = {successRedirect: '/', failureRedirect: '/login'};

authRouter.get('/auth/user', (request, response) => {
        winston.info(request.user)
        winston.info(response.user)

    if (request.user) {
        response.json(request.user);
        return;
    }

    return response.sendStatus(401);
});

authRouter.get('/auth/basic', passport.authenticate('basic', redirects));

authRouter.post('/auth/local', passport.authenticate('local', redirects));

authRouter.get('/auth/logout', (request, response) => {
    winston.info(`Logout ${request.user}`);

    request.logout();
    response.redirect('/');
});

module.exports = authRouter;
