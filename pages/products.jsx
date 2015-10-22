'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var CreateProduct = require('../components/product/create');
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
		});

		this.refreshFilter();
    },
	componentDidMount() {
		this.refreshList();
  	},
    refreshList() {
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
    refreshFilter() {
    	this.setState({
			filteredProducts: _.filter(this.state.products, product =>
				product.name.toLowerCase().indexOf(this.state.searchExpression.toLowerCase()) > -1)
		});
    },
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="list" /> Products</span>}>
    		 	<CreateProduct onHide={this.refreshList} />
        		<SearchBar searchExpression={this.state.searchExpression}
        			placeholder="Search product"
    		 		onChange={this.searchExpressionChanged} />
        		<ProductsList products={this.state.filteredProducts} />
			</Panel>
		)
	}
})