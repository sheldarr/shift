'use strict'

var React = require('react');
var ProductsList = require('./productsList');

var products = [
	{
		id: 1,
		name: 'Woda',
		kcal: 1024
	}, {
		id: 2,
		name: 'Jajka',
		kcal: 1024
	}, {
		id: 3,
		name: 'Mleko',
		kcal: 1024
	}
];

module.exports = React.createClass({
    displayName: 'Shift',
    render: function() {
        return <ProductsList products={products} />
    }
});