'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var AddPatient = require('../components/addPatient');
var PatientsList = require('../components/patientsList');
var SearchBar = require('../components/searchBar');

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
    refreshList() {
    	console.log('refresh')
	 	Request
	   		.get('http://localhost:8088/api/patient')
		   	.end(function(err, res){
		     	if (res.ok) {
				   	component.setState({
			   			patients: res.body,
	   			   		filteredPatients: res.body
			   		});
					this.refreshFilter();

				} else {
		       		alert('Api error' + res.text);
		     	}
	   		});
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
				<AddPatient onHide={this.refreshList}/>
				<SearchBar searchExpression={this.state.searchExpression}
					placeholder="Search patient"
    		 		onChange={this.searchExpressionChanged} />
				<PatientsList patients={this.state.filteredPatients} />
			</Panel>
		);
	}
})