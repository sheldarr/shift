'use strict'

var _ = require('lodash');

var patients = require('json!./patients.json');

module.exports = {
	getAll() {
		return patients;
	},
	getById(id) {
		return _.find(patients, function (patient) {
			return patient.id == id;
		});
	}
}
	