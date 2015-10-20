'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;

var moment = require('moment');

var PatientsService = require('../services/patientsService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false,
	        name: '',
	        surname: '',
	       	dateOfBirth: moment(),
	      	telephone: '',
	      	email: '', 	
	        sex: 0
	    };
	},
	propTypes: {
	    onHide: React.PropTypes.func.isRequired
	},
	showModal() {
		this.setState({
		   showModal: true,
	        name: '',
	        surname: '',
	       	dateOfBirth: moment(),
	      	telephone: '',
	      	email: '', 	
	        sex: 0
		});
	},
	hideModal() {
		this.setState({
			showModal: false
		});
	},
	createPatient() {
		PatientsService.create({
			id: Math.floor((Math.random() * 65535) + 1),
			name: this.state.name,
			surname: this.state.surname,
			dateOfBirth: this.state.dateOfBirth,
			telephone: this.state.telephone,
			email: this.state.email,
			sex: this.state.sex
		})
		.then(response => {
			this.props.onHide();
			this.hideModal();
		})
		.catch(error => { 
			alert('Api error ' + error)
		});
	},
	nameChanged(event) {
		this.setState({
			name: event.target.value
		})
	},
	surnameChanged(event) {
		this.setState({
			surname: event.target.value
		})
	},
	dateOfBirthChanged(event) {
		this.setState({
			dateOfBirth: moment(event.target.value)
		})
	},
	telephoneChanged(event) {
		this.setState({
			telephone: event.target.value
		})
	},
	emailChanged(event) {
		this.setState({
			email: event.target.value
		})
	},
	genderChanged(event) {
		this.setState({
			sex: event.target.value
		})
	},
	calculateAge() {
		return this.state.dateOfBirth.year();
	},
	render() {
		return (
			<div className="pull-right">
				<Button bsStyle="success" style={{marginLeft: 20}} onClick={this.showModal}>
						<Glyphicon glyph="plus"/> Create patient
				</Button>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create patient</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Input type="text" label="Name" value={this.state.name} onChange={this.nameChanged} />
						<Input type="text" label="Surname" value={this.state.surname} onChange={this.surnameChanged} />
	  					<label>Date of birth</label>
						<Input type="date" selected={this.state.dateOfBirth} onChange={this.dateOfBirthChanged} />
						<Input type="text" label="Age" addonAfter="years" readOnly value={this.calculateAge()} />
						<Input type="text" label="Telephone" value={this.state.telephone} onChange={this.telephoneChanged} />
						<Input type="email" label="Email" value={this.state.email} onChange={this.emailChanged} />
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.createPatient}>
							<Glyphicon glyph="plus"/> Create
						</Button>
						<Button bsStyle="danger" style={{marginLeft: 20}} onClick={this.hideModal}>
							<Glyphicon glyph="remove"/> Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});