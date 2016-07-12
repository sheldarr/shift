const express = require('express');

const router = new express.Router();

router.get('/resources', (request, response) => {
    response.json(response.__('pages'));
});

router.get('/resources/:page', (request, response) => {
    response.json(response.__(`pages.${request.params.page}`));
});

module.exports = router;
