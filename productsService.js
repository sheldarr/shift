'use strict'

var products = require('json!./products.json');

module.exports = {
	getAll() {
		return products;
	}
}
	