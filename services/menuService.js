'use strict'

var Request = require('superagent');

module.exports = {
	create(patientId, menu) {
		return new Promise(function(resolve, reject) {
			Request
				.post(`http://localhost:8088/api/patient/${patientId}/menu`)
				.send(menu)
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