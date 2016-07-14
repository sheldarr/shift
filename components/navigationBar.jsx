'use strict';

import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

import React from 'react';
import authService from '../src/frontend/services/authService';

const NavigationBar = React.createClass({
    getInitialState () {
        return {
            user: undefined
        };
    },

    componentWillMount () {
        authService.getUser()
            .then((user) => {
                this.setState(user);
            });
    },

    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>{'Shift'}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        {this.state.user ? `Logged in as ${this.state.user.name}` : ''}
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={'/patients'}>{'Patients'}</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={'/products'}>{'Products'}</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={'/calculator'}>{'Calculator'}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default NavigationBar;
