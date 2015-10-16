'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var ProductsList = require('../components/productsList');
var ProductsService = require('../services/productsService');
var SearchBar = require('../components/searchBar');

module.exports = React.createClass({
	getInitialState() {
		return {
			searchExpression: '',
			products: [],
			filteredProducts: [],
		}
	},
	searchExpressionChanged(searchExpression) {
		this.setState({
			searchExpression: searchExpression,
			filteredProducts: _.filter(this.state.products, product =>
				product.name.toLowerCase().indexOf(searchExpression.toLowerCase()) > -1)
		});
    },
	componentDidMount() {
		ProductsService.getAll()
			.then(response => {
				this.setState({
		   			products: response,
   			   		filteredProducts: response
		   		})
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
  	},
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="list" /> Products</span>}>
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