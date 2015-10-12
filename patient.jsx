'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;

var PatientsStore = require('./patientsStore');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        patient: {
	        	id: 0,
	        	name: '',
	        	age: 0
	        }  
	    };
	},
  	componentDidMount() {
    	this.setState({
      		patient: PatientsStore.getById(this.props.params.patientId)
    	});
  	},
	header: <Glyphicon glyph="user" />,
	render() {
		return (
			<Panel header={<span><Glyphicon glyph="user" /> {this.state.patient.name}</span>}>
				<Input type="age" label="Age" readOnly value={this.state.patient.age} />
				<Button bsStyle="primary" href="#/patients">
    		 		<Glyphicon glyph="arrow-left" /> Back
		 		</Button>
			</Panel>
		);
	}
})