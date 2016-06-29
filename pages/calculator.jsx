'use strict'

var React = require('react');

var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Grid = require('react-bootstrap').Grid;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Row = require('react-bootstrap').Row;

var Enums = require('../api/enums');
var IndexCalculator = require('../logic/indexCalculator');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        weight: 65,
	        height: 180,
	        age: 23,
	        sex: Enums.sex.male,
	        physicalActivityRate: 1.6,
	        waistCircumference: 0.5,
	        hipCircumference: 1
	    };
	},
	weightChanged(event) {
		var weight = Math.min(Math.max(event.target.value, 0), 400);

		this.setState({
			weight: weight
		})
	},
	heightChanged(event) {
		var height = Math.min(Math.max(event.target.value, 0), 272);

		this.setState({
			height: height
		})
	},
	ageChanged(event) {
		var age = Math.min(Math.max(event.target.value, 0), 122);

		this.setState({
			age: age
		})
	},
	physicalActivityRateChanged(event) {
		var physicalActivityRate = Math.min(Math.max(event.target.value, 0), 16);

		this.setState({
			physicalActivityRate: physicalActivityRate
		})
	},
	sexChanged(event) {
		this.setState({
			sex: event.target.value
		})
	},
	waistCircumferenceChanged(event) {
		this.setState({
			waistCircumference: event.target.value
		})
	},
	hipCircumferenceChanged(event) {
		this.setState({
			hipCircumference: event.target.value
		})
	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.state.weight,
			this.state.height)).toFixed(2);
	},
	calculateBmr() {	
		return (IndexCalculator.calculateBmr(this.state.weight,
			this.state.height, this.state.age, this.state.sex)).toFixed(2);
	},
	calculateTmr() {
		return (IndexCalculator.calculateTmr(this.state.weight,
			this.state.height, this.state.age, this.state.sex,
			this.state.physicalActivityRate)).toFixed(2);
	},
	calculateWhr() {
		return (IndexCalculator.calculateWhr(this.state.waistCircumference,
			this.state.hipCircumference)).toFixed(2);
	},
	getObesityType() {
		return IndexCalculator.getObesityType(this.state.waistCircumference,
			this.state.hipCircumference, this.state.sex);
	},
	render() {
		return(
			<Panel header={<span><Glyphicon glyph="heart" /> Calculator</span>}>
				<Row>
					<Col md={6}>
						<Panel header="Data">
							<Input type="number" label="Weight" addonAfter="kg" value={this.state.weight} onChange={this.weightChanged} min="1" />
							<Input type="number" label="Height" addonAfter="cm" value={this.state.height} onChange={this.heightChanged} min="1" />
							<Input type="number" label="Age" addonAfter="years" value={this.state.age} onChange={this.ageChanged} min="1" />
							<Input type="number" label="Physical Activity Rate" value={this.state.physicalActivityRate} onChange={this.physicalActivityRateChanged} step="0.1" min="0.1"/>
							<Input type="number" label="Waist Circumference" addonAfter="cm" value={this.state.waistCircumference} onChange={this.waistCircumferenceChanged} step="0.1" />
							<Input type="number" label="Hip Circumference" addonAfter="cm" value={this.state.hipCircumference} onChange={this.hipCircumferenceChanged} step="0.1" />
		      	  			<div className="input-group">
		      	  				<label>Gender</label>
		      	  				<Input type="radio" label="Male" value={Enums.sex.male} checked={this.state.sex == Enums.sex.male} name="sex" onChange={this.sexChanged} />
		       	 				<Input type="radio" label="Female" value={Enums.sex.female} checked={this.state.sex == Enums.sex.female} name="sex" onChange={this.sexChanged} />
							</div>
						</Panel>
					</Col>
					<Col md={6}>
						<Panel header="Results">
							<Input type="number" label="BMI (Body Mass Index)" readOnly value={this.calculateBmi()} />
							<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
							<Input type="number" label="TMR (Total Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateTmr()} />
							<Input type="number" label="WHR (Waist to Hip Ratio)" readOnly value={this.calculateWhr()} />
							<Input type="text" label="Obesity Type" readOnly value={this.getObesityType()} />
						</Panel>
					</Col>
				</Row>
			</Panel>
		)
	}
})