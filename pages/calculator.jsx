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
	        factor: 1.6  
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
	factorChanged(event) {
		var factor = Math.min(Math.max(event.target.value, 0), 16);

		this.setState({
			factor: factor
		})
	},
	sexChanged(event) {
		this.setState({
			sex: event.target.value
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
			this.state.factor)).toFixed(2);
	},
	getBmiCategory() {
		return IndexCalculator.getBmiCategory(this.state.weight,
			this.state.height);
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
							<Input type="number" label="Factor" value={this.state.factor} onChange={this.factorChanged} step="0.1"  min="0.1"/>
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
							<Input type="text" label="Category" readOnly value={this.getBmiCategory()} />
							<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
							<Input type="number" label="TMR (Total Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateTmr()} />
						</Panel>
					</Col>
				</Row>
			</Panel>
		)
	}
})