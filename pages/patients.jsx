'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var CreatePatient = require('../components/patient/create');
var PatientsList = require('../components/patientsList');
var PatientsService = require('../services/patientsService');
var SearchBar = require('../components/searchBar');

module.exports = React.createClass({
	getInitialState() {
	    return {
	    	searchExpression: '',
	        patients: [],
    	  	filteredPatients: []
	    };
	},
	componentDidMount() {
	    this.refreshList();
  	},
	searchExpressionChanged(searchExpression) {
		this.setState({
			searchExpression: searchExpression,
		});

		this.refreshFilter();
    },
    refreshList() {
    	PatientsService.getAll()
			.then(response => {
				this.setState({
		   			patients: response,
   			   		filteredPatients: response
		   		})
			})
			.catch(error => { 
				alert('Api error ' + error)
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
			<Panel header={<span><Glyphicon glyph="list" /> Patients</span>}>
				<CreatePatient onHide={this.refreshList} />
				<SearchBar searchExpression={this.state.searchExpression}
					placeholder="Search patient"
    		 		onChange={this.searchExpressionChanged} />
				<PatientsList patients={this.state.filteredPatients} onChange={this.refreshList}/>
			</Panel>
		);
	}
})