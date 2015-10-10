'use strict'

var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var NavBrand = require('react-bootstrap').NavBrand;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

module.exports = React.createClass({
	render() {
		return (
	 		<Navbar inverse toggleNavKey={0}>
    			<NavBrand>Shift</NavBrand>
				<Nav right eventKey={0}> {/* This is the eventKey referenced */}
  					<NavItem eventKey={1} href="#">Products</NavItem>
  					<NavItem eventKey={2} href="#">Patients</NavItem>
				</Nav>
  			</Navbar>
		)
	}
})