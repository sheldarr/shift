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
    const pageLocale = `pages.${request.params.page}`;
    const page = response.__(pageLocale);

    if (pageLocale === page) {
        response.sendStatus(404);
        return;
    }

    const resources = Object.assign({}, {
        page: page,
        commons: response.__('commons')
    });

    response.json(resources);
});

module.exports = resourcesRouter;
