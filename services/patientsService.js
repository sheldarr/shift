'use strict'

var Request = require('superagent');

module.exports = {
	getAll() {
		return new Promise(function(resolve, reject) {
			Request
				.get('http://localhost:3030/api/patient')
				.end((err, res) => {
					if (res.ok) {
						resolve(res.body);
					} else {
						reject(res.text);
					}
				});
		});
	},
	getById(id) {
		return new Promise(function(resolve, reject) {
			Request
				.get(`http://localhost:3030/api/patient/${id}`)
				.end(function(err, res){
					if (res.ok) {
						resolve(res.body);
					} else {
						reject(res.text);
					}
				});
		});
	},
	create(patient) {
		return new Promise(function(resolve, reject) {
			Request
				.post('http://localhost:3030/api/patient')
				.send(patient)
				.end((err, res) => {
					if (res.ok) {
						resolve();
					} else {
						reject(res.text);
					}
				});
		});
	},
	delete(id) {
		return new Promise(function(resolve, reject) {
			Request
				.del(`http://localhost:3030/api/patient/${id}`)
				.end(function(err, res){
					if (res.ok) {
						resolve(res.body);
					} else {
						reject(res.text);
					}
				});
		});
	}
}