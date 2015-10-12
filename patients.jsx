'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var PatientsList = require('./patientsList');
var PatientsStore = require('./patientsStore');
var SearchBar = require('./searchBar');

var Header = <span><Glyphicon glyph="list" /> Patients</span>

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patients: PatientsStore.getAll(),
    	  	filteredPatients: PatientsStore.getAll(),
        	searchExpression: ''
	    };
	},
	searchExpressionChanged(searchExpression) {
		this.setState({
			searchExpression: searchExpression,
			filteredPatients: _.filter(this.state.patients, patient =>
				patient.name.toLowerCase().indexOf(searchExpression.toLowerCase()) > -1)
		});
    },
	render() {
		return(
			<Panel header={Header}>
				<Button className="pull-right" bsStyle="success" style={{marginLeft: 20}}>
					<Glyphicon glyph="plus"/> Add patient
				</Button>
				<SearchBar searchExpression={this.state.searchExpression}
					placeholder="Search patient"
    		 		onChange={this.searchExpressionChanged} />
				<PatientsList patients={this.state.filteredPatients} />
			</Panel>
		);
	}
})