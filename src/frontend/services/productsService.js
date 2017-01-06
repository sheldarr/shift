'use strict';

import fetchService from './fetchService';

const productsService = {
    getAll (callback) {
        return fetchService.get('http://localhost:3030/api/product', callback);
    },

    getById (id, callback) {
        return fetchService.get(`http://localhost:3030/api/product/${id}`, callback);
    },

    create (product, callback) {
        return fetchService.post('http://localhost:3030/api/product', product, callback);
    }
};

export default productsService;

