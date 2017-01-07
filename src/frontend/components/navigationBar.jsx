'use strict';

import {Link} from 'react-router';
import {Button, Navbar} from 'react-bootstrap';

import React from 'react';

import authService from '../services/authService';
import {browserHistory} from 'react-router';

const NavigationBar = React.createClass({
    propTypes: {
        user: React.PropTypes.object
    },

    logout() {
        authService.logout(() => {
            browserHistory.push('/login');
        });
    },

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>{'Shift'}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        <Link to={'/patients'}>{'Patients'}</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={'/products'}>{'Products'}</Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <Link to={'/calculator'}>{'Calculator'}</Link>
                    </Navbar.Text>
                    <Navbar.Form pullRight>
                        <Button bsStyle="primary" onClick={this.logout}>
                            {'Logout'}
                        </Button>
                    </Navbar.Form>
                    <Navbar.Text pullRight>
                        {`Signed in as: ${this.props.user
                            ? this.props.user.username
                            : ''}`}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default NavigationBar;
