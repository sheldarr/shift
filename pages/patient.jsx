'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var Request = require('superagent');

var PatientsService = require('../services/patientsService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patient: {
	        	id: 0,
	        	name: '',
	        	weight: 0,
	        	height: 0,
	        	age: 0
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
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="user" /> {this.state.patient.name}</span>}>
				<Input type="number" label="Weight" addonAfter="kg" readOnly value={this.state.patient.weight} />
				<Input type="number" label="Height" addonAfter="cm" readOnly value={this.state.patient.height} />
				<Input type="number" label="Age" addonAfter="years" readOnly value={this.state.patient.age} />
				<Button bsStyle="primary" href="#/patients">
    		 		<Glyphicon glyph="arrow-left" /> Back
		 		</Button>
			</Panel>
		);
	}
})