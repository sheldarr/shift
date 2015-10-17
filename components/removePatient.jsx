'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Modal = require('react-bootstrap').Modal;

var Request = require('superagent');

var PatientsService = require('../services/patientsService');
var ConfirmationModal = require('./confirmationModal');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false,
	    };
	},
	propTypes: {
	    onRemove: React.PropTypes.func.isRequired,
	    patient: React.PropTypes.object.isRequired,
	},
	showModal() {
		this.setState({
			showModal: true,
		});
	},
	hideModal(confirmed) {
		if(confirmed) {
			this.removePatient()
		}

		this.setState({
			showModal: false
		});
	},
	removePatient() {
		PatientsService.delete(this.props.patient.id)
			.then(response => {
				this.props.onRemove();
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
	},
	render() {
		return (
			<div className="pull-right">
				<Button bsStyle="danger" onClick={this.showModal}>
						<Glyphicon glyph="remove"/> Remove
				</Button>
				<ConfirmationModal show={this.state.showModal} 
					onHide={this.hideModal}
					title="Remove patient"
					body={`Do you really want to remove patient ${this.props.patient.name}?`} />
			</div>
		);
	}
});