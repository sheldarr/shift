const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/product', (req, res) => {
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        res.json(JSON.parse(data));
    });
});

router.post('/product/', (req, res) => {
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const products = JSON.parse(data);

        products.push(req.body);

        fs.writeFile('./data/products.json', JSON.stringify(products));

        res.sendStatus(200);
    });
});

module.exports = router;
