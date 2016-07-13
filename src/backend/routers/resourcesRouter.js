const express = require('express');

const resourcesRouter = new express.Router();

resourcesRouter.get('/resources', (request, response) => {
    const resources = Object.assign({},
        response.__('commons'),
        response.__('pages')
    );

    response.json(resources);
});

resourcesRouter.get('/resources/:page', (request, response) => {
    const resources = Object.assign({},
        response.__('commons'),
        response.__(`pages.${request.params.page}`)
    );

    response.json(resources);
});

module.exports = resourcesRouter;
