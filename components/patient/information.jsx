'use strict';

var React = require('react');

var constants = require('../../src/commons/constants');
var moment = require('moment');

var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Row = require('react-bootstrap').Row;

module.exports = React.createClass({
	propTypes() {
		patient: React.PropTypes.object.isRequired
	},
	calculateAge() {
		return moment().diff(this.props.patient.dateOfBirth, 'years');
	},
	render() {
		return (
			<Panel header="Information">
				<Row>
					<Col md={6}>
						<Input type="text" label="Name" readOnly value={this.props.patient.name} />
						<label>Date of birth</label>
						<Input type="date" readOnly value={this.props.patient.dateOfBirth} />
						<Input type="text" label="Telephone" readOnly value={this.props.patient.telephone} />
					</Col>
					<Col md={6}>
						<Input type="text" label="Surname" readOnly value={this.props.patient.surname} />
						<Input type="text" label="Age" addonAfter="years" readOnly value={this.calculateAge()} />
						<Input type="email" label="Email" readOnly value={this.props.patient.email} />
					</Col>
				</Row>
				<div className="input-group">
	  				<label>Gender</label>
	  				<Input type="radio" label="Male" disabled value={constants.sex.male} checked={this.props.patient.sex == constants.sex.male} name="sex" />
	 				<Input type="radio" label="Female" disabled value={constants.sex.female} checked={this.props.patient.sex == constants.sex.female} name="sex" />
				</div>
			</Panel>
		);
	}
})