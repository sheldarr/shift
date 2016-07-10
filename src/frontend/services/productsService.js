'use strict';

const productsService = {
    getAll () {
        return fetch('http://localhost:3030/api/product', {
            method: 'get'
        }).then((response) => {
            return response.json();
        });
    },

    getById (id) {
        return fetch(`http://localhost:3030/api/product/${id}`, {
            method: 'get'
        }).then((response) => {
            return response.json();
        });
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

