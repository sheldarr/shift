'use strict'

var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var AddPatient = require('./addPatient');
var PatientsList = require('./patientsList');
var SearchBar = require('./searchBar');

var Header = <span><Glyphicon glyph="list" /> Patients</span>

module.exports = React.createClass({
	getInitialState() {
	    return {
	    	searchExpression: '',
	        patients: [],
    	  	filteredPatients: []
	    };
	},
	componentDidMount() {
    var component = this;
    Request
   		.get('http://localhost:8088/api/patient')
	   	.end(function(err, res){
	     	if (res.ok) {
			   	component.setState({
		   			patients: res.body,
   			   		filteredPatients: res.body
		   		});
			} else {
	       		alert('Api error' + res.text);
	     	}
   		});
  	},
	searchExpressionChanged(searchExpression) {
		this.setState({
			searchExpression: searchExpression,
		});
		this.refreshFilter();
    },
    patientCreated(patient) {
		this.state.patients.push(patient);
		this.refreshFilter();
    },
    refreshFilter() {
    	this.setState({
			filteredPatients: _.filter(this.state.patients, patient =>
				patient.name.toLowerCase().indexOf(this.state.searchExpression.toLowerCase()) > -1)
		});
    },
	render() {
		return(
			<Panel header={Header}>
				<AddPatient onHide={this.patientCreated}/>
				<SearchBar searchExpression={this.state.searchExpression}
					placeholder="Search patient"
    		 		onChange={this.searchExpressionChanged} />
				<PatientsList patients={this.state.filteredPatients} />
			</Panel>
		);
	}
})