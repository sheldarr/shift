const express = require('express');
const passport = require('passport');
const path = require('path');
const winston = require('winston');

const authRouter = new express.Router();

authRouter.get('/auth/basic', passport.authenticate('basic'), (request, response) => {
    winston.info(`Login ${JSON.stringify(request.user)}`);
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

authRouter.get('/auth/logout', (request, response) => {
    winston.info(`Logout ${request.user}`);

    request.logOut();
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = authRouter;
