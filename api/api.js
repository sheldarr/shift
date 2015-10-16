var _ = require('lodash');
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');

var app = express();      

var port = 8088;

var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
	next();
});

router.get('/', function(req, res) {
	res.sendStatus(200);  
});

router.get('/patient', function(req, res) {
	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		res.json(JSON.parse(data));
	});
});

router.get('/patient/:id', function(req, res) {
	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		var patients = JSON.parse(data);

		var patient = _.find(patients, function(patient) {
			return patient.id == req.params.id;
		});

		res.json(patient);
	});
});

router.post('/patient/', function(req, res) {
	console.log(`POST: ${JSON.stringify(req.body)}`);

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}
		
		var patients = JSON.parse(data);
		
		patients.push(req.body);

		fs.writeFile('./data/patients.json', JSON.stringify(patients));

		res.sendStatus(200);
	});
});

router.delete('/patient/', function(req, res) {
	console.log(`DELETE: ${JSON.stringify(req.body)}`);

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}
		
		var patients = JSON.parse(data);

		_.remove(data, {id: req.body.id});

		fs.writeFile('./data/patients.json', JSON.stringify(patients));

		res.sendStatus(200);
	});

});


router.get('/product', function(req, res) {
    fs.readFile('./data/products.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		res.json(JSON.parse(data));
	});
});

app.use('/api', router);

app.listen(port);
console.log('Api is running on port: ' + port);