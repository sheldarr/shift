'use strict'

var React = require('react');

var Panel = require('react-bootstrap').Panel;
var Input = require('react-bootstrap').Input;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var Glyphicon = require('react-bootstrap').Glyphicon;

var IndexCalculator = require('./logic/indexCalculator');

var Header = <span><Glyphicon glyph="heart" /> Calculator</span>;

module.exports = React.createClass({
	getInitialState() {
	    return {
	        weight: 65,
	        height: 180,
	        age: 23,
	        gender: IndexCalculator.genders.Man,
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
	genderChanged(event) {
		this.setState({
			gender: event.target.value
		})
	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.state.weight,
			this.state.height)).toFixed(2);
	},
	calculateBmr(weight, height, age, gender) {	
		return (IndexCalculator.calculateBmr(this.state.weight,
			this.state.height, this.state.age, this.state.gender)).toFixed(2);
	},
	calculateCpr(weight, height, age, gender, factor) {
		return (IndexCalculator.calculateCpr(this.state.weight,
			this.state.height, this.state.age, this.state.gender,
			this.state.factor)).toFixed(2);
	},
	getBmiCategory(weight, height) {
		return IndexCalculator.getBmiCategory(this.state.weight,
			this.state.height);
	},
	render() {
		return(
			<Panel header={Header}>
				<Panel header="Data">
					<Input type="number" label="Weight" addonAfter="kg" value={this.state.weight} onChange={this.weightChanged} min="1" />
					<Input type="number" label="Height" addonAfter="cm" value={this.state.height} onChange={this.heightChanged} min="1" />
					<Input type="number" label="Age" addonAfter="years" value={this.state.age} onChange={this.ageChanged} min="1" />
	      	  		<Input type="radio" label="Man" value={IndexCalculator.genders.Man} name="gender" onChange={this.genderChanged} defaultChecked={true}/>
	       	 		<Input type="radio" label="Woman" value={IndexCalculator.genders.Woman} name="gender" onChange={this.genderChanged} />
					<Input type="number" label="Factor" addonAfter=".1" value={this.state.factor} onChange={this.factorChanged} step="0.1"  min="0.1"/>
				</Panel>
				<Panel header="Results">
					<Input type="number" label="BMI (Body Mass Index)" readOnly value={this.calculateBmi()} />
					<Input type="text" label="Category" readOnly value={this.getBmiCategory()} />
					<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
					<Input type="number" label="CPR (Cosmic Power Regeneration)" addonAfter="kcal / day" readOnly value={this.calculateCpr()} />
				</Panel>
			</Panel>
		)
	}
})