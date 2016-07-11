'use strict';

import fetchService from './fetchService';

const productsService = {
    getAll () {
        return fetchService.get('http://localhost:3030/api/product');
    },

    getById (id) {
        return fetchService.get(`http://localhost:3030/api/product/${id}`);
    },

    create (product) {
        return fetchService.post('http://localhost:3030/api/product', product);
    }
};

export default productsService;

