'use strict'

import React from 'react';
import { Route, Router } from 'react-router';
import ReactDOM from 'react-dom';

import { Col, Grid, Row } from 'react-bootstrap';

// import Calculator from './pages/calculator.jsx';
// var Menu = require('./pages/menu.jsx');
// var NotFound = require('./pages/notFound.jsx');
// var Patients = require('./pages/patients.jsx');
// var Patient = require('./pages/patient.jsx');
// var Products = require('./pages/products.jsx');

console.log(React);

var NavigationBar = require('./components/navigationBar.jsx')

const App = React.createClass({
    render() {
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
    <Router>
        <Route path="/" component={App}>
            {/*<Route path="/patients" component={Patients} />
            <Route path="/patient/:patientId" component={Patient} />
            <Route path="/patient/:patientId/menu/:menuId" component={Menu} />
            <Route path="/products" component={Products} />
            <Route path="/calculator" component={Calculator} />
            <Route path="*" component={NotFound}/>*/}
        </Route>
    </Router>
), document.getElementById('content'));