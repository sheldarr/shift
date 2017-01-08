const express = require('express');

const resourcesRouter = new express.Router();

resourcesRouter.get('/resources', (request, response) => {
    const resources = Object.assign({}, {
        pages: response.__('pages'),
        commons: response.__('commons')
    });

    response.json(resources);
});

resourcesRouter.get('/resources/:page', (request, response) => {
    const resources = Object.assign({}, {
        page: response.__(`pages.${request.params.page}`),
        commons: response.__('commons')
    });

    response.json(resources);
});

module.exports = resourcesRouter;
