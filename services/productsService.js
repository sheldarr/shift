'use strict'

var Request = require('superagent');

module.exports = {
	getAll() {
		return new Promise(function(resolve, reject) {
			Request
				.get('http://localhost:8088/api/product')
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
				.get(`http://localhost:8088/api/product/${id}`)
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