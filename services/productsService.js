'use strict'

var Request = require('superagent');

module.exports = {
	getAll() {
		return new Promise(function(resolve, reject) {
			Request
				.get('http://localhost:3030/api/product')
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
				.get(`http://localhost:3030/api/product/${id}`)
				.end(function(err, res){
					if (res.ok) {
						resolve(res.body);
					} else {
						reject(res.text);
					}
				});
		});
	},
	create(product) {
		return new Promise(function(resolve, reject) {
			Request
				.post('http://localhost:3030/api/product')
				.send(product)
				.end((err, res) => {
					if (res.ok) {
						resolve();
					} else {
						reject(res.text);
					}
				});
		});
	}
}