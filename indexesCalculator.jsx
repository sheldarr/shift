'use strict'

var React = require('react');

var Panel = require('react-bootstrap').Panel;
var Input = require('react-bootstrap').Input;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

const Genders = {
	Man: "0",
	Woman: "1"
}

module.exports = React.createClass({
	getInitialState() {
	    return {
	        weight: 65,
	        height: 180,
	        age: 23,
	        gender: Genders.Man,
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
		return this.state.weight / Math.pow(this.state.height/100, 2);
	},
	calculateBmr() {
		if(this.state.gender === Genders.Man) {
			return 66.4730 + ((13.7516 * this.state.weight) + 
				(5.0033 * this.state.height) -
				(6.7550 * this.state.age));
		}

		return 655.0955 + ((9.5634 * this.state.weight) + 
			(1.8496 * this.state.height) - 
			(4.6756 * this.state.age));
	},
	calculateCpr() {
		return this.calculateBmr() * this.state.factor;
	},
	getBmiCategory() {
		var bmi = this.calculateBmi();

		if(bmi < 15) {
			return 'Very severely underweight';
		}
		if(bmi < 16) {
			return 'Severely underweight';
		}
		if(bmi < 18.5) {
			return 'Underweight';
		}
		if(bmi < 25) {
			return 'Normal (healthy weight)';
		}
		if(bmi < 30) {
			return 'Overweight';
		}
		if(bmi < 35) {
			return 'Obese Class I (Moderately obese)';
		}
		if(bmi < 40) {
			return 'Obese Class II (Severely obese)';
		}
		return 'Obese Class III (Very severely obese)';
	},
	render() {
		return(
			<Panel header="Calculator">
				<Panel header="Data">
					<Input type="number" label="Weight" addonAfter="kg" value={this.state.weight} onChange={this.weightChanged} />
					<Input type="number" label="Height" addonAfter="cm" value={this.state.height} onChange={this.heightChanged} />
					<Input type="number" label="Age" addonAfter="years" value={this.state.age} onChange={this.ageChanged} />
	      	  		<Input type="radio" label="Man" value={Genders.Man} name="gender" onChange={this.genderChanged} defaultChecked={true}/>
	       	 		<Input type="radio" label="Woman" value={Genders.Woman} name="gender" onChange={this.genderChanged} />
					<Input type="number" label="Factor" addonAfter=".0" value={this.state.factor} onChange={this.factorChanged} />
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