const express = require('express');
const passport = require('passport');
const winston = require('winston');

const authRouter = new express.Router();

authRouter.get('/auth/user', (request, response) => {
    response.cookie('custom-cookie-user', 'test', {maxAge: 36000});

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

authRouter.post('/auth/local', passport.authenticate('local'), (request, response) => {
    winston.info(`Local Login ${JSON.stringify(request.user)}`);
    response.cookie('custom-cookie', 'test', {maxAge: 36000});
    response.status(200).redirect('/');
});

authRouter.get('/auth/logout', (request, response) => {
    winston.info(`Logout ${request.user}`);

    request.logout();
    response.redirect('/');
});

module.exports = authRouter;
