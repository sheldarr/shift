'use strict'

var Request = require('superagent');

module.exports = {
	getAll(callback) {
		Request
	   		.get('http://localhost:8088/api/patient')
		   	.end(function(err, res){
		     	if (res.ok) {
		     		callback(res.body);
		   		} else {
       				alert('Api error' + res.text);
		     	}
	   		});
	}
}