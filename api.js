var _ = require('lodash');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();      

var port = 8088;

var router = express.Router();

var patients = require('./data/patients.json');
var products = require('./data/products.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get('/', function(req, res) {
    res.json({ message: 'OK' });   
});

router.get('/patient', function(req, res) {
    res.json(patients);   
});

router.get('/patient/:id', function(req, res) {
	var patient = _.find(patients, function (patient) {
		return patient.id == req.params.id;
	});

	res.json(patient)
});

router.get('/product', function(req, res) {
    res.json(products);
});

router.get('/product/:id', function(req, res) {
	var product = _.find(products, function (product) {
		return product.id == req.params.id;
	});

	res.json(product)
});

app.use('/api', router);

app.listen(port);
console.log('Shift api is running on port: ' + port);