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

var Header = <span><Glyphicon glyph="heart" /> Calculator</span>;

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
		this.setState({
			weight: event.target.value
		})
	},
	heightChanged(event) {
		this.setState({
			height: event.target.value
		})
	},
	ageChanged(event) {
		this.setState({
			age: event.target.value
		})
	},
	factorChanged(event) {
		this.setState({
			factor: event.target.value
		})
	},
	sexChanged(event) {
		console.log(event.target.value);

		this.setState({
			sex: event.target.value
		})

		console.log(this.state.sex);
	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.state.weight,
			this.state.height)).toFixed(2);
	},
	calculateBmr() {	
		return (IndexCalculator.calculateBmr(this.state.weight,
			this.state.height, this.state.age, this.state.sex)).toFixed(2);
	},
	calculateCpr() {
		return (IndexCalculator.calculateCpr(this.state.weight,
			this.state.height, this.state.age, this.state.sex,
			this.state.factor)).toFixed(2);
	},
	getBmiCategory() {
		return IndexCalculator.getBmiCategory(this.state.weight,
			this.state.height);
	},
	render() {
		return(
			<Panel header={Header}>
				<Row>
					<Col md={6}>
						<Panel header="Data">
							<Input type="number" label="Weight" addonAfter="kg" value={this.state.weight} onChange={this.weightChanged} min="1" />
							<Input type="number" label="Height" addonAfter="cm" value={this.state.height} onChange={this.heightChanged} min="1" />
							<Input type="number" label="Age" addonAfter="years" value={this.state.age} onChange={this.ageChanged} min="1" />
							<Input type="number" label="Factor" addonAfter=".1" value={this.state.factor} onChange={this.factorChanged} step="0.1"  min="0.1"/>
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
							<Input type="number" label="CPR (Cosmic Power Regeneration)" addonAfter="kcal / day" readOnly value={this.calculateCpr()} />
						</Panel>
					</Col>
				</Row>
			</Panel>
		)
	}
})