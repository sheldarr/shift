'use strict'

var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var SearchBar = require('./searchBar');
var PatientsList = require('./patientsList');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patients: [{ 
	        	id: 1,
	        	name: "John Smith",
	        	age: 32
        	}, { 
	        	id: 2,
	        	name: "Anne Smith",
	        	age: 30
        	}, { 
	        	id: 3,
	        	name: "William Blazkowicz",
	        	age: 34
        	}],
    	  	filteredPatients: [{ 
	        	id: 1,
	        	name: "John Smith",
	        	age: 32
        	}, { 
	        	id: 2,
	        	name: "Anne Smith",
	        	age: 30
        	}, { 
	        	id: 3,
	        	name: "William Blazkowicz",
	        	age: 34
        	}],
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
			<Panel header="Patients">
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