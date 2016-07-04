'use strict';

import {Col, Grid, Row} from 'react-bootstrap';
import {Route, Router, browserHistory} from 'react-router';

import NavigationBar from './components/navigationBar.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

// import Calculator from './pages/calculator.jsx';
// var Menu = require('./pages/menu.jsx');
// var NotFound = require('./pages/notFound.jsx');
// var Patients = require('./pages/patients.jsx');
// var Patient = require('./pages/patient.jsx');
// var Products = require('./pages/products.jsx');

const App = React.createClass({
    render () {
        return (
            <div>
                <NavigationBar />
                <Grid>
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
        <Route component={App} path="/" >
            {/* <Route path="/patients" component={Patients} />
            <Route path="/patient/:patientId" component={Patient} />
            <Route path="/patient/:patientId/menu/:menuId" component={Menu} />
            <Route path="/products" component={Products} />
            <Route path="/calculator" component={Calculator} />
            <Route path="*" component={NotFound}/>*/}
        </Route>
    </Router>
), document.getElementById('root'));
