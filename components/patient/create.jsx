'use strict'

var React = require('react');

var Enums = require('../../api/enums');
var moment = require('moment');

var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;
var Row = require('react-bootstrap').Row;

var PatientsService = require('../../services/patientsService');

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
			dateOfBirth: this.state.dateOfBirth.format("YYYY-MM-DD"),
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
	sexChanged(event) {
		this.setState({
			sex: event.target.value
		})
	},
	calculateAge() {
		return moment().diff(this.state.dateOfBirth, 'years');
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
						<Row>
							<Col md={6}>
								<Input type="text" label="Name" value={this.props.name} onChange={this.nameChanged} />
								<label>Date of birth</label>
								<Input type="date" value={this.props.dateOfBirth} onChange={this.dateOfBirthChanged} />
								<Input type="text" label="Telephone" value={this.props.telephone} onChange={this.telephoneChanged} />
							</Col>
							<Col md={6}>
								<Input type="text" label="Surname" value={this.props.surname} onChange={this.surnameChanged} />
								<Input type="text" label="Age" addonAfter="years" readOnly value={this.calculateAge()} />
								<Input type="email" label="Email" value={this.props.email} onChange={this.emailChanged}/>
							</Col>
						</Row>
						<div className="input-group">
			  				<label>Gender</label>
			  				<Input type="radio" label="Male" value={Enums.sex.male} checked={this.state.sex == Enums.sex.male} name="sex" onChange={this.sexChanged} />
			 				<Input type="radio" label="Female" value={Enums.sex.female} checked={this.state.sex == Enums.sex.female} name="sex" onChange={this.sexChanged} />
						</div>
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