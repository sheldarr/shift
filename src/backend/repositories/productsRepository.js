const fs = require('fs-extra');

const productsRepository = {
    getById (id) {
        const products = fs.readJsonSync('./data/products.json', 'utf8');

        const product = products.find((product) => {
            return product.id === id;
        });

        return product;
    }
};

module.exports = productsRepository;
