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
        return fetch('http://localhost:3030/api/product', {
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        });
    }
};

export default productsService;

