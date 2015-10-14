'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var request = require('superagent');

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
	header: <Glyphicon glyph="user" />,
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="user" /> {this.state.patient.name}</span>}>
				<Input type="number" label="Weight" readOnly value={this.state.patient.weight} />
				<Input type="number" label="Height" readOnly value={this.state.patient.height} />
				<Input type="number" label="Age" readOnly value={this.state.patient.age} />
				<Button bsStyle="primary" href="#/patients">
    		 		<Glyphicon glyph="arrow-left" /> Back
		 		</Button>
			</Panel>
		);
	}
})