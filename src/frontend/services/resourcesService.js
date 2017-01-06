'use strict';

import fetchService from './fetchService';

const resourcesService = {
    getAll (callback) {
        return fetchService.get('http://localhost:3030/api/resources', callback);
    },

    getByPage (page, callback) {
        return fetchService.get(`http://localhost:3030/api/resources/${page}`, callback);
    }
};

export default resourcesService;
