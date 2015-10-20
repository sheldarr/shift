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
				<Input type="number" label="Weight" addonAfter="kg" readOnly value={this.props.patient.weight} />
				<Input type="number" label="Height" addonAfter="cm" readOnly value={this.props.patient.height} />
				<Input type="number" label="Age" addonAfter="years" readOnly value={this.props.patient.age} />
				<Input type="number" label="Factor" readOnly value={this.props.patient.factor} />
				<div className="input-group">
		  				<label>Gender</label>
		  				<Input type="radio" label="Male" disabled value={Enums.sex.male} checked={this.props.patient.sex == Enums.sex.male} name="sex" />
		 				<Input type="radio" label="Female" disabled value={Enums.sex.female} checked={this.props.patient.sex == Enums.sex.female} name="sex" />
				</div>
			</Panel>
		);
	}
})