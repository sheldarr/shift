'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import { Col, Grid, Row } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'

// import Calculator from './pages/calculator.jsx';
// var Menu = require('./pages/menu.jsx');
// var NotFound = require('./pages/notFound.jsx');
// var Patients = require('./pages/patients.jsx');
// var Patient = require('./pages/patient.jsx');
// var Products = require('./pages/products.jsx');
import NavigationBar from './components/navigationBar.jsx';

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
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<Route path="/patients" component={Patients} />
            <Route path="/patient/:patientId" component={Patient} />
            <Route path="/patient/:patientId/menu/:menuId" component={Menu} />
            <Route path="/products" component={Products} />
            <Route path="/calculator" component={Calculator} />
            <Route path="*" component={NotFound}/>*/}
        </Route>
    </Router>
), document.getElementById('root'));