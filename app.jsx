'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var Calculator = require('./pages/calculator');
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
      	<div className="row col-md-8 col-md-offset-2" style={{marginTop: 20}}>
	 		    {this.props.children}
        </div>
      </div>
    )
  }
})

ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<Route path="/patients" component={Patients} />
				<Route path="/patient/:patientId" component={Patient} />
	  		<Route path="/products" component={Products} />
	  		<Route path="/calculator" component={Calculator} />
	  		<Route path="*" component={NotFound}/>
		</Route>
  	</Router>
), document.getElementById('content'))
