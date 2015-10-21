'use strict'

var React = require('react');

var Enums = require('../../api/enums');

var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;

module.exports = React.createClass({
	propTypes() {
		patient: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<Panel header="Information">
				<Input type="text" label="Name" readOnly value={this.props.patient.name} />
				<Input type="text" label="Surname" readOnly value={this.props.patient.surname} />
				<label>Date of birth</label>
				<Input type="date" readOnly value={this.props.patient.dateOfBirth} />
				<Input type="text" label="Age" addonAfter="years" readOnly value={0} />
				<Input type="text" label="Telephone" readOnly value={this.props.patient.telephone} />
				<Input type="email" label="Email" readOnly value={this.props.patient.email} />
				<div className="input-group">
	  				<label>Gender</label>
	  				<Input type="radio" label="Male" disabled value={Enums.sex.male} checked={this.props.patient.sex == Enums.sex.male} name="sex" />
	 				<Input type="radio" label="Female" disabled value={Enums.sex.female} checked={this.props.patient.sex == Enums.sex.female} name="sex" />
				</div>
			</Panel>
		);
	}
})