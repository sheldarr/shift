'use strict'

var React = require('react');
var Link = require('react-router').Link;

var Navbar = require('react-bootstrap').Navbar;
var NavBrand = require('react-bootstrap').NavBrand;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;


module.exports = React.createClass({
	render() {
		return (
	 		<Navbar>
    			<NavBrand>Shift</NavBrand>
				<Nav right> 
					<NavItem href="#/patients">Patients</NavItem>
  					<NavItem href="#/products">Products</NavItem>
  					<NavItem href="#/calculator">Calculator</NavItem>
				</Nav>
  			</Navbar>
		)
	}
})