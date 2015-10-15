'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var ProductsList = require('../components/productsList');
var SearchBar = require('../components/searchBar');

var Header = <span><Glyphicon glyph="list" /> Products</span>

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
	    var component = this;
	    Request
	   		.get('http://localhost:8088/api/product')
		   	.end(function(err, res){
		     	if (res.ok) {
				   	component.setState({
			   			products: res.body,
	   			   		filteredProducts: res.body
			   		});
				} else {
		       		alert('Api error' + res.text);
		     	}
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