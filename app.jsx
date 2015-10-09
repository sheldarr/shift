'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var Shift = require('./shift');

ReactDOM.render(
	React.createElement(Shift, null),
	document.getElementById('content')
);