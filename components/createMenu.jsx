'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;

var moment = require('moment');

var MenuService = require('../services/menuService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false,
	        name: '',
	        days: 0,
	        startDate: moment()
	    }
	},
	propTypes: {
	    onHide: React.PropTypes.func.isRequired,
	    patientId: React.PropTypes.number.isRequired
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
	nameChanged(event) {
		this.setState({
			name: event.target.value
		})
	},
	daysChanged(event) {
		this.setState({
			days: event.target.value
		})
	},
	startDateChanged(event) {
		this.setState({
			startDate: moment(event.target.value)
		})
	},
	createMenu() {
		MenuService.create(this.props.patientId, {
			id: Math.floor((Math.random() * 65535) + 1),
			name: this.state.name,
			days: this.state.days,
			startDate: this.state.startDate,
		})
		.then(response => {
			this.props.onHide();
			this.hideModal();
		})
		.catch(error => { 
			alert('Api error ' + error)
		});
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
      	  				<Input type="text" label="Name" onChange={this.nameChanged} value={this.state.name} />
						<Input type="number" label="Days" onChange={this.daysChanged} value={this.state.days} min="1" />
      	  				<label>Start date</label>
      	  				<Input mode="date" onChange={this.startDateChanged} value={this.state.startDate} />
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