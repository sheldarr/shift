'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Grid = require('react-bootstrap').Grid;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Request = require('superagent');
var Row = require('react-bootstrap').Row;

var Enums = require('../api/enums');
var IndexCalculator = require('../logic/indexCalculator');
var PatientsService = require('../services/patientsService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patient: {
	        	id: 0,
	        	name: '',
	        	weight: 0,
	        	height: 0,
	        	age: 0,
	        	factor: 0,
	        	sex: Enums.sex.male
	        }  
	    };
	},
	componentDidMount() {
	    PatientsService.getById(this.props.params.patientId)
			.then(response => {
				this.setState({
		   			patient: response,
		   		});
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
  	},
	calculateBmi() {
		return (IndexCalculator.calculateBmi(this.state.patient.weight,
			this.state.patient.height)).toFixed(2);
	},
	calculateBmr() {	
		return (IndexCalculator.calculateBmr(this.state.patient.weight,
			this.state.patient.height, this.state.patient.age, 
			this.state.patient.sex)).toFixed(2);
	},
	calculateCpr() {
		return (IndexCalculator.calculateCpr(this.state.patient.weight,
			this.state.patient.height, this.state.patient.age,
			this.state.patient.sex, this.state.patient.factor)).toFixed(2);
	},
	getBmiCategory() {
		return IndexCalculator.getBmiCategory(this.state.patient.weight,
			this.state.patient.height);
	},
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="user" /> {this.state.patient.name}</span>}>
				<Row>
					<Col md={6}>
						<Panel header="Information">
							<Input type="number" label="Weight" addonAfter="kg" readOnly value={this.state.patient.weight} />
							<Input type="number" label="Height" addonAfter="cm" readOnly value={this.state.patient.height} />
							<Input type="number" label="Age" addonAfter="years" readOnly value={this.state.patient.age} />
							<Input type="number" label="Factor" readOnly value={this.state.patient.factor} />
							<div className="input-group">
		      	  				<label>Gender</label>
		      	  				<Input type="radio" label="Male" disabled value={Enums.sex.male} checked={this.state.patient.sex == Enums.sex.male} name="sex" />
		       	 				<Input type="radio" label="Female" disabled value={Enums.sex.female} checked={this.state.patient.sex == Enums.sex.female} name="sex" />
							</div>
						</Panel>
					</Col>
					<Col md={6}>
						<Panel header="Status">
							<Input type="number" label="BMI (Body Mass Index)" readOnly value={this.calculateBmi()} />
							<Input type="text" label="Category" readOnly value={this.getBmiCategory()} />
							<Input type="number" label="BMR (Basal Metabolic Rate)" addonAfter="kcal / day" readOnly value={this.calculateBmr()} />
							<Input type="number" label="CPR (Cosmic Power Regeneration)" addonAfter="kcal / day" readOnly value={this.calculateCpr()} />
						</Panel>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Panel header="Menus">
							<Button bsStyle="success">
		    		 			<Glyphicon glyph="add" /> Create menu
				 			</Button>
						</Panel>
		 			</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Button bsStyle="primary" href="#/patients">
	    		 			<Glyphicon glyph="arrow-left" /> Back
			 			</Button>
		 			</Col>
				</Row>
			</Panel>
		);
	}
})