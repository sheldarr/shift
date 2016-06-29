'use strict'

import React from 'react';

import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavigationBar = React.createClass({
	render() {
		return (
	 		<Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">Shift</a>
                  </Navbar.Brand>
                </Navbar.Header>
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