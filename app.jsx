'use strict';

import {Col, Grid, Row} from 'react-bootstrap';
import {Route, Router, browserHistory} from 'react-router';

import Calculator from './pages/calculator.jsx';
import NavigationBar from './components/navigationBar.jsx';
import NotFound from './pages/notFound.jsx';
import Notifications from './src/frontend/components/notifications.jsx';
import Patients from './pages/patients.jsx';
import Products from './pages/products.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render () {
        return (
            <div>
                <NavigationBar/>
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
            {/* <Route path="/patient/:patientId" component={Patient}/>*/}
            {/* <Route path="/patient/:patientId/menu/:menuId" component={Menu}/>*/}
            <Route component={Patients} path="/patients"/>
            <Route component={Products} path="/products"/>
            <Route component={Calculator} path="/calculator"/>
            <Route component={NotFound} path="*"/>
        </Route>
    </Router>
), document.getElementById('root'));
