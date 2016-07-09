'use strict';

import React from 'react';

var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Grid = require('react-bootstrap').Grid;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Request = require('superagent');
var Row = require('react-bootstrap').Row;

var Enums = require('../api/enums');

var CreateMenu = require('../components/createMenu.jsx');
var MenusList = require('../components/menusList.jsx');
var PatientsService = require('../services/patientsService');
var PatientInformation = require('../components/patient/information.jsx');
var PatientMeasurement = require('../components/patient/measurement.jsx')

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patient: {
	        	id: 0,
	        	name: '',
	        	weight: 0,
	        	height: 0,
	        	age: 0,
	        	factor: 0,
	        	sex: Enums.sex.male,
	        	measurements: [{
		        	id: 0,
	       	 		date: '01-01.1970',
		        	weight: 0,
		        	height: 0,
	       	 		physicalActivityRate: 1.0,
		        	waistCircumference: 0,
	        		hipCircumference: 0
	        	}],
	        	menus: []
	        }
	    };
	},
	componentDidMount() {
	    this.reloadPatient();
  	},
  	reloadPatient() {
   		PatientsService.getById(this.props.params.patientId)
			.then(response => {
				this.setState({
		   			patient: response,
		   		});
			})
			.catch(error => {
				alert('Api error ' + error)
			});
  	},
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="user" /> {this.state.patient.name}</span>}>
				<Row>
					<Col md={6}>
						<PatientInformation patient={this.state.patient} />
					</Col>
					<Col md={6}>
						<PatientMeasurement measurement={_.last(this.state.patient.measurements)} />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Panel header="Menus">
							<MenusList menus={this.state.patient.menus}
								patientId={this.state.patient.id} />
							<CreateMenu onHide={this.reloadPatient} patientId={this.state.patient.id} />
						</Panel>
		 			</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Button bsStyle="primary" href="#/patients">
	    		 			<Glyphicon glyph="arrow-left" /> Back
			 			</Button>
		 			</Col>
				</Row>
			</Panel>
		);
	}
})