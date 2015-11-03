'use strict'

var React = require('react');

var Enums = require('../../api/enums');
var moment = require('moment');

var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Row = require('react-bootstrap').Row;

var IndexCalculator = require('../../logic/indexCalculator');

module.exports = React.createClass({
	propTypes() {
		measurement: React.PropTypes.object.isRequired
	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.props.measurement.weight,
			this.props.measurement.height)).toFixed(2);
	},
	calculateBmr() {	
		var age = this.calculateAge();

		return (IndexCalculator.calculateBmr(this.props.measurement.weight,
			this.props.measurement.height, age, 
			this.props.measurement.sex)).toFixed(2);
	},
	calculateTmr() {
		var age = this.calculateAge();

		return (IndexCalculator.calculateTmr(this.props.measurement.weight,
			this.props.measurement.height, age,
			this.props.measurement.sex, this.props.measurement.physicalActivityRate)).toFixed(2);
	},
	getBmiCategory() {
		return IndexCalculator.getBmiCategory(this.props.measurement.weight,
			this.props.measurement.height);
	},
	calculateWhr() {
		return (IndexCalculator.calculateWhr(this.props.measurement.waistCircumference,
			this.props.measurement.hipCircumference)).toFixed(2);
	},
	getObesityType() {
		return IndexCalculator.getObesityType(this.props.measurement.waistCircumference,
			this.props.measurement.hipCircumference, this.props.measurement.sex);
	},
	calculateAge() {
		return moment().diff(this.props.measurement.dateOfBirth, 'years');
	},
	render() {
		return (
			<Panel header={`Measurement ${this.props.measurement.date}`}>
				<Row>
					<Col md={6}>
						<Input type="number" label="Weight" addonAfter="kg" readOnly value={this.props.measurement.weight} />
						<Input type="number" label="Height" addonAfter="cm" readOnly value={this.props.measurement.height} />
						<Input type="number" label="Physical activity rate" readOnly value={this.props.measurement.physicalActivityRate} />
						<Input type="number" label="Waist Circumference" addonAfter="cm" readOnly value={this.props.measurement.waistCircumference} />
						<Input type="number" label="Hip Circumference" addonAfter="cm" readOnly value={this.props.measurement.hipCircumference} />
					</Col>
					<Col md={6}>
						<Input type="number" label="BMI (Body Mass Index)" readOnly value={this.calculateBmi()} />
						<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
						<Input type="number" label="TMR (Total Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateTmr()} />
						<Input type="number" label="WHR (Waist to Hip Ratio)" readOnly value={this.calculateWhr()} />
						<Input type="text" label="Obesity Type" readOnly value={this.getObesityType()} />
					</Col>
				</Row>
			</Panel>
		);
	}
})


