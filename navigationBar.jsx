'use strict'

var React = require('react');

var Navbar = require('react-bootstrap').Navbar;
var NavBrand = require('react-bootstrap').NavBrand;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var FilterableProductsList = require('./filterableProductsList');
var Calculator = require('./calculator');

module.exports = React.createClass({
	availableModules: {
		filterableProductsList: 'List',
		calculator: 'Calculator'
	},
	propTypes: {
	    onChange: React.PropTypes.func.isRequired
	},
	handleChange(module, event) {
		switch(module) {
			case this.availableModules.filterableProductsList:
				this.props.onChange(<FilterableProductsList />);
				break;
			case this.availableModules.calculator:
				this.props.onChange(<Calculator />);
				break;
		};
	},
	render() {
		return (
	 		<Navbar>
    			<NavBrand>Shift</NavBrand>
				<Nav right> 
  					<NavItem href="#" onClick={this.handleChange.bind(null, this.availableModules.filterableProductsList)}>Products</NavItem>
  					<NavItem href="#" onClick={this.handleChange.bind(null, this.availableModules.calculator)}>BMI/BMR/CPR</NavItem>
				</Nav>
  			</Navbar>
		)
	}
})