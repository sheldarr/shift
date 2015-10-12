'use strict'

var React = require('react');
var _ = require('lodash');

var Panel = require('react-bootstrap').Panel;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var SearchBar = require('./searchBar');
var ProductsList = require('./productsList');
var ProductsService = require('./productsService');

var Header = <span><Glyphicon glyph="list" /> Products</span>

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
			<Panel header={Header}>
    		 	<Button bsStyle="success" className="pull-right" style={{marginLeft: 20}}>
    		 		<Glyphicon glyph="plus" /> Add product
		 		</Button>
        		<SearchBar searchExpression={this.state.searchExpression}
        			placeholder="Search product"
    		 		onChange={this.searchExpressionChanged} />
        		<ProductsList products={this.state.filteredProducts} />
			</Panel>
		)
	}
})