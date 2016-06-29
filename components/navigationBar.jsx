'use strict'

import React from 'react';

import { Link } from 'react-router';
import { Nav, Navbar, NavBrand, NavItem } from 'react-bootstrap';

const NavigationBar = React.createClass({
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

export default NavigationBar;