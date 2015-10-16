'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;

var Request = require('superagent');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false,
	        name: '',
	        weight: 0,
	        height: 0,
	        age: 0,
	        sex: 0
	    };
	},
	propTypes: {
	    onHide: React.PropTypes.func.isRequired
	},
	showModal() {
		this.setState({
			showModal: true,
			name: '',
			weight: 0,
			height: 0,
			age: 0,
			sex: 0
		});
	},
	hideModal() {
		this.setState({
			showModal: false
		});
	},
	addPatient() {
		 Request
			.post('http://localhost:8088/api/patient')
			.send({
				id: Math.floor((Math.random() * 65535) + 1),
				name: this.state.name,
				weight: this.state.weight,
				height: this.state.height,
				age: this.state.age,
				sex: this.state.sex
			})
		   	.end(function(err, res){
		     	if (res.ok) {
	     			this.hideModal();
	     			this.props.onHide();
				} else {
		       		alert('Api error' + res.text);
		     	}
			});
	},
	nameChanged(event) {
		this.setState({
			name: event.target.value
		})
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
			sex: event.target.value
		})
	},
	render() {
		return (
			<div className="pull-right">
				<Button bsStyle="success" style={{marginLeft: 20}} onClick={this.showModal}>
						<Glyphicon glyph="plus"/> New patient
				</Button>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create patient</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Input type="text" label="Name" value={this.state.name} onChange={this.nameChanged}/>
						<Input type="number" label="Weight" addonAfter="kg" value={this.state.weight} onChange={this.weightChanged} min="1" />
						<Input type="number" label="Height" addonAfter="cm" value={this.state.height} onChange={this.heightChanged} min="1" />
						<Input type="number" label="Age" addonAfter="years" value={this.state.age} onChange={this.ageChanged} min="1" />
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.addPatient}>
							<Glyphicon glyph="plus"/> Add
						</Button>
						<Button bsStyle="danger" style={{marginLeft: 20}} onClick={this.hideModal}>
							<Glyphicon glyph="remove"/> Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});