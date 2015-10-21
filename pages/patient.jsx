'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Grid = require('react-bootstrap').Grid;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Request = require('superagent');
var Row = require('react-bootstrap').Row;

var Enums = require('../api/enums');

var CreateMenu = require('../components/createMenu');
var MenusList = require('../components/menusList');
var PatientsService = require('../services/patientsService');
var PatientInformation = require('../components/patient/information');
var PatientStatus = require('../components/patient/status')

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
						<PatientStatus patient={this.state.patient} />
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