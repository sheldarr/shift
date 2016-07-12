'use strict';

import fetchService from './fetchService';

const resourcesService = {
    getAll () {
        return fetchService.get('http://localhost:3030/api/resources');
    },

    getByPage (page) {
        return fetchService.get(`http://localhost:3030/api/resources/${page}`);
    }
};

export default resourcesService;
