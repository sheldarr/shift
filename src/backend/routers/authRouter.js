const express = require('express');
const passport = require('passport');

const authRouter = new express.Router();

authRouter.get('/auth/user', (request, response) => {
    if (request.user) {
        response.json(request.user);
        return;
    }

    return response.sendStatus(401);
});

authRouter.post('/auth/login', (request, response, next) => {
    passport.authenticate('local', (error, user) => {
        if (error) {
            return next(error);
        }

        if (!user) {
            return response.sendStatus(401);
        }

        request.logIn(user, (error) => {
            if (error) {
                return next(error);
            }

            return response.sendStatus(200);
        });
    })(request, response, next);
});

module.exports = authRouter;
