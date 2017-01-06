const express = require('express');
const passport = require('passport');

const authRouter = new express.Router();
const redirects = {successRedirect: '/', failureRedirect: '/login'};

authRouter.get('/auth/user', (request, response) => {
    if (request.user) {
        response.json(request.user);
        return;
    }

    return response.sendStatus(401);
});

authRouter.post('/auth/local', passport.authenticate('local', redirects));

module.exports = authRouter;
