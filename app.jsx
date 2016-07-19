'use strict';

import {Col, Grid, Row} from 'react-bootstrap';
import {IndexRedirect, Route, Router, browserHistory} from 'react-router';

import Calculator from './pages/calculator.jsx';
import Dashboard from './src/frontend/pages/dashboard.jsx';
import Login from './src/frontend/pages/login.jsx';
import NavigationBar from './components/navigationBar.jsx';
import NotFound from './pages/notFound.jsx';
import Notifications from './src/frontend/components/notifications.jsx';
import Patients from './pages/patients.jsx';
import Products from './pages/products.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

import authService from './src/frontend/services/authService';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    getInitialState () {
        return {
            user: undefined
        };
    },

    componentWillMount () {
        this.fetchUser();
    },

    componentDidUpdate () {
        if (this.state.user) {
            return;
        }

        this.fetchUser();
    },

    fetchUser () {
        authService.getUser()
            .then((user) => {
                if (user) {
                    this.setState({user});
                }
            });
    },

    requiresRoles (roles, nextState, replace) {
        if (this.state.user) {
            const userHasPermission = roles.some((role) => {
                return this.state.user.roles.includes(role);
            });

            if (!userHasPermission) {
                replace({pathname: '/login'});
            }
        }

        replace({pathname: '/'});
    },

    render () {
        return (
            <div>
                <NavigationBar user={this.state.user}/>
                <Grid>
                    <Row>
                        <Col>
                            <Notifications/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={App} path="/">
            <IndexRedirect to="/dashboard" />
            <Route component={Dashboard} path="/dashboard"/>
            {/* <Route path="/patient/:patientId" component={Patient}/>*/}
            {/* <Route path="/patient/:patientId/menu/:menuId" component={Menu}/>*/}
            <Route component={Patients} path="/patients"/>
            <Route component={Products} path="/products"/>
            <Route component={Calculator} path="/calculator"/>
            <Route component={Login} path="/login"/>
            <Route component={NotFound} path="*"/>
        </Route>
    </Router>
), document.getElementById('root'));
