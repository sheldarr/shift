'use strict';

import checkForErrors from '../checkForErrors';
import notifyAboutErrors from '../notifyAboutErrors';

const productsService = {
    getAll () {
        return fetch('http://localhost:3030/api/product', {
            method: 'get'
        }).then(checkForErrors)
        .then((response) => {
            return response.json();
        })
        .catch(notifyAboutErrors);
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

