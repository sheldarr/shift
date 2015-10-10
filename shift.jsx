'use strict'

var React = require('react');
var _ = require('lodash');

var Panel = require('react-bootstrap').Panel;
var NavigationBar = require('./navigationBar');

var SearchBar = require('./SearchBar');

var ProductsList = require('./productsList');

module.exports = React.createClass({
	getInitialState() {
		return {
			products: [
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
			],
			filteredProducts: []
		}
	},
    searchExpressionChanged: function(searchExpression) {
    	console.log(_);
    	console.log(searchExpression)

    	this.state.filteredProducts = _.where(this.state.products, function(product) {
    		return product.name.toLowerCase().indexOf(searchExpression.toLowerCase()) > -1;
    	})
    	
    	console.log(this.state.filteredProducts);
    },
    render: function() {
        return (
        	<div>
	        	<NavigationBar />
	        	<div className="row" style={{marginTop: 100}}>
	        		<div className='col-md-6 col-md-offset-3'>
			        	<Panel>
			        		<SearchBar onChange={this.searchExpressionChanged}/>
			        		<ProductsList products={this.state.filteredProducts} />
			        	</Panel>
		        	</div>
	        	</div>
        	</div>
    	)
    }
});