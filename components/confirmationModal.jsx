'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Modal = require('react-bootstrap').Modal;

module.exports = React.createClass({
	propTypes: {
	    title: React.PropTypes.string.isRequired,
     	body: React.PropTypes.string,
		show: React.PropTypes.bool.isRequired,
		onHide: React.PropTypes.func.isRequired
	},
	confirm() {
		this.props.onHide(true);
	},
	cancel() {
		this.props.onHide(false);
	},
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.body}
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" 
						onClick={this.confirm}>
						<Glyphicon glyph="ok"/> Confirm
					</Button>
					<Button bsStyle="danger" style={{marginLeft: 20}} 
						onClick={this.cancel}>
						<Glyphicon glyph="remove"/> Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
})