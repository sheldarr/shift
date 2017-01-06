'use strict';

import {Col, Grid, Row} from 'react-bootstrap';
import {IndexRedirect, Route, Router, browserHistory} from 'react-router';

import Calculator from './pages/calculator.jsx';
import Dashboard from './src/frontend/pages/dashboard.jsx';
import Login from './src/frontend/pages/login.jsx';
import NavigationBar from './components/navigationBar.jsx';
import NotFound from './pages/notFound.jsx';
import Notifications from './src/frontend/components/notifications.jsx';
import Patient from './src/frontend/pages/patient.jsx';
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
        authService.getUser((error, response) => {
            let user = response.body;

            if(response.statusCode === 401 && this.props.location.pathname !== '/login') {
                browserHistory.push('/login');
            }

            if (user) {
                this.setState({user});
            }
        });
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
        <Route path="/">
            <Route component={App}>
                <IndexRedirect to="dashboard" />
                <Route component={Dashboard} path="dashboard"/>
                <Route component={Patient} path="patient/:patientId"/>
                <Route component={Patients} path="patients"/>
                <Route component={Products} path="products"/>
                <Route component={Calculator} path="calculator"/>
                {/* <Route component={NotFound} path="*"/> */}
                {/* <Route path="/patient/:patientId/menu/:menuId" component={Menu}/>*/}
            </Route>
            <Route component={Login} path="login"/>
        </Route>
    </Router>
), document.getElementById('root'));
