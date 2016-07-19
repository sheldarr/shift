'use strict';

import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

import React from 'react';

const NavigationBar = React.createClass({
    propTypes: {
        user: React.PropTypes.object
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
                        <Link to={'/patients'}>{'Patients'}</Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Link to={'/products'}>{'Products'}</Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <Link to={'/calculator'}>{'Calculator'}</Link>
                    </Navbar.Text>
                    <Navbar.Text pullRight>
                    {this.props.user
                        ? <span><Link to={'/login'}>{this.props.user.username}</Link><Link to={'/auth/logout'}>{'Logout'}</Link></span>
                        : <Link to={'/login'}>{'Login'}</Link>
                    }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default NavigationBar;
