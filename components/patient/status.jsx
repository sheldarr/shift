'use strict'

var React = require('react');

var Enums = require('../../api/enums');

var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Row = require('react-bootstrap').Row;



var IndexCalculator = require('../../logic/indexCalculator');

module.exports = React.createClass({
	propTypes() {
		patient: React.PropTypes.object.isRequired
	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.props.patient.weight,
			this.props.patient.height)).toFixed(2);
	},
	calculateBmr() {	
		return (IndexCalculator.calculateBmr(this.props.patient.weight,
			this.props.patient.height, this.props.patient.age, 
			this.props.patient.sex)).toFixed(2);
	},
	calculateTmr() {
		return (IndexCalculator.calculateCpr(this.props.patient.weight,
			this.props.patient.height, this.props.patient.age,
			this.props.patient.sex, this.props.patient.physicalActivityRate)).toFixed(2);
	},
	getBmiCategory() {
		return IndexCalculator.getBmiCategory(this.props.patient.weight,
			this.props.patient.height);
	},
	render() {
		return (
			<Panel header="Status">
				<Row>
					<Col md={6}>
						<Input type="number" label="Weight" addonAfter="kg" readOnly value={this.props.patient.weight} />
						<Input type="number" label="Height" addonAfter="cm" readOnly value={this.props.patient.height} />
						<Input type="number" label="Physical activity rate" readOnly value={this.props.patient.physicalActivityRate} />
					</Col>
					<Col md={6}>
						<Input type="number" label="BMI (Body Mass Index)" readOnly value={this.calculateBmi()} />
						<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
						<Input type="number" label="TMR (Total Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateTmr()} />
					</Col>
				</Row>
			</Panel>
		);
	}
})


