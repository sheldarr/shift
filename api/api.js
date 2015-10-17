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
	console.log('GET: /');
	res.sendStatus(200);  
});

router.get('/patient', function(req, res) {
	console.log('GET: /patient');

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		res.json(JSON.parse(data));
	});
});

router.get('/patient/:id', function(req, res) {
	console.log(`GET: /patient/${req.params.id}`);

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		var patients = JSON.parse(data);

		var patient = _.find(patients, patient => patient.id == req.params.id);

		res.json(patient);
	});
});

router.post('/patient/', function(req, res) {
	console.log(`POST: /patient/${JSON.stringify(req.body)}`);

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

router.delete('/patient/:id', function(req, res) {
	console.log(`DELETE: /patient/${req.params.id}`);

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}
		
		var patients = JSON.parse(data);

		_.remove(patients, patient => patient.id == req.params.id);

		fs.writeFile('./data/patients.json', JSON.stringify(patients));

		res.sendStatus(200);
	});

});


router.get('/product', function(req, res) {
	console.log('GET: /product');

    fs.readFile('./data/products.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}

		res.json(JSON.parse(data));
	});
});

router.post('/patient/:id/menu', function(req, res) {
	console.log(`POST: /patient/${req.params.id}/menu`);

	fs.readFile('./data/patients.json', 'utf8', function (err, data) {
		if(err) {
			console.log(err);
		}
		
		var patients = JSON.parse(data);

		var patient = _.find(patients, patient => patient.id == req.params.id);
		
		patient.menus.push(req.body);

		fs.writeFile('./data/patients.json', JSON.stringify(patients));

		res.sendStatus(200);
	});
});


app.use('/api', router);

app.listen(port);
console.log('Api is running on port: ' + port);