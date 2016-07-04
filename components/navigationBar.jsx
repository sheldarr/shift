'use strict';

import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {Link} from 'react-router';

import React from 'react';

const NavigationBar = React.createClass({
    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>{'Shift'}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <Link to={'/patients'}>{'Patients'}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/products'}>{'Products'}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={'/calculator'}>{'Calulator'}</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
});

export default NavigationBar;
