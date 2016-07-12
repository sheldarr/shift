const express = require('express');

const router = new express.Router();

router.get('/resources', (request, response) => {
    const resources = Object.assign({},
        response.__('commons'),
        response.__('pages')
    );

    response.json(resources);
});

router.get('/resources/:page', (request, response) => {
    const resources = Object.assign({},
        response.__('commons'),
        response.__(`pages.${request.params.page}`)
    );

    response.json(resources);
});

module.exports = router;
