'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var DateTimeField = require('react-bootstrap-datetimepicker');
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;

var Request = require('superagent');

var IndexCalculator = require('../logic/indexCalculator');
var PatientsService = require('../services/patientsService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false
	    }
	},
	propTypes: {
	    onHide: React.PropTypes.func.isRequired,
	},
	showModal() {
		this.setState({
			showModal: true,
		});
	},
	hideModal() {
		this.setState({
			showModal: false
		});
	},
	calculateCpr() {
		return (IndexCalculator.calculateCpr(this.props.patient.weight,
			this.props.patient.height, this.props.patient.age,
			this.props.patient.sex, this.props.patient.factor)).toFixed(2);
	},
	render() {
		return (
			<div>
				<Button bsStyle="success" onClick={this.showModal} block>
						<Glyphicon glyph="plus"/> Create menu
				</Button>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create menu</Modal.Title>
					</Modal.Header>
					<Modal.Body>
      	  				<Input type="text" label="Name" onChange={() => 0} />
						<Input type="number" label="Days" onChange={() => 0} min="1" />
      	  				<label>Start date</label>
      	  				<DateTimeField mode="date" />
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.createMenu}>
							<Glyphicon glyph="plus"/> Create
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