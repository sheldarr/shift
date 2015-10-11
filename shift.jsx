'use strict'

var React = require('react');
var _ = require('lodash');

var Panel = require('react-bootstrap').Panel;

var NavigationBar = require('./navigationBar');
var SearchBar = require('./searchBar');
var ProductsList = require('./productsList');

var ProductsService = require('./productsService');

module.exports = React.createClass({
	getInitialState() {
		return {
			products: ProductsService.getAll(),
			filteredProducts: ProductsService.getAll(),
		}
	},
    searchExpressionChanged(searchExpression) {
		this.setState({
			filteredProducts: _.filter(this.state.products, product =>
				product.name.toLowerCase().indexOf(searchExpression.toLowerCase()) > -1)
		});
    },
    render() {
        return (
        	<div>
	        	<NavigationBar />
	        	<div className="row" style={{marginTop: 100}}>
	        		<div className='col-md-8 col-md-offset-2'>
			        	<Panel>
			        		{this.state.searchExpression}
			        		<SearchBar searchExpression={this.state.searchExpression} onChange={this.searchExpressionChanged}/>
			        		<ProductsList products={this.state.filteredProducts} />
			        	</Panel>
		        	</div>
	        	</div>
        	</div>
    	)
    }
});