'use strict'

var React = require('react');
var _ = require('lodash');

var Panel = require('react-bootstrap').Panel;

var SearchBar = require('./searchBar');
var ProductsList = require('./productsList');

var ProductsService = require('./productsService');

module.exports = React.createClass({
	getInitialState() {
		return {
			searchExpression: '',
			products: ProductsService.getAll(),
			filteredProducts: ProductsService.getAll(),
		}
	},
	searchExpressionChanged(searchExpression) {
		this.setState({
			searchExpression: searchExpression,
			filteredProducts: _.filter(this.state.products, product =>
				product.name.toLowerCase().indexOf(searchExpression.toLowerCase()) > -1)
		});
    },
	render() {
		return (
			<Panel header="Products">
        		<SearchBar searchExpression={this.state.searchExpression}
    		 		onChange={this.searchExpressionChanged}/>
        		<ProductsList products={this.state.filteredProducts} />
			</Panel>
		)
	}
})