'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var Calculator = require('./pages/calculator');
var Menu = require('./pages/menu');
var NotFound = require('./pages/notFound');
var Patients = require('./pages/patients');
var Patient = require('./pages/patient');
var Products = require('./pages/products');

var NavigationBar = require('./components/navigationBar')

const App = React.createClass({
    render() {
        return (
            <div>
                <NavigationBar />
                <Grid>
                    <Row>
                        <Col md={12}>
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
            <Route path="/patients" component={Patients} />
            <Route path="/patient/:patientId" component={Patient} />
            <Route path="/patient/:patientId/menu/:menuId" component={Menu} />
            <Route path="/products" component={Products} />
            <Route path="/calculator" component={Calculator} />
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('content'));