'use strict'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Modal = require('react-bootstrap').Modal;
var Row = require('react-bootstrap').Row;

var ProductsService = require('../../services/productsService');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        showModal: false,
	        name: '',
	        caloricValue: 0,
	        protein: 0,
	        fat: 0,
	        carbohydrates: 0,
	        roughage: 0
	    };
	},
	propTypes: {
	    onHide: React.PropTypes.func.isRequired
	},
	showModal() {
		this.setState({
		   showModal: true,
	     	name: '',
	        caloricValue: 0,
	        protein: 0,
	        fat: 0,
	        carbohydrates: 0,
	        roughage: 0
		});
	},
	hideModal() {
		this.setState({
			showModal: false
		});
	},
	createProduct() {
		ProductsService.create({
			id: Math.floor((Math.random() * 65535) + 1),
			name: this.state.name,
	        caloricValue: this.state.caloricValue,
	        protein: this.state.protein,
	        fat: this.state.fat,
	        carbohydrates: this.state.carbohydrates,
	        roughage: this.state.roughage
		})
		.then(response => {
			this.props.onHide();
			this.hideModal();
		})
		.catch(error => { 
			alert('Api error ' + error)
		});
	},
	nameChanged(event) {
		this.setState({
			name: event.target.value
		})
	},
	caloricValueChanged(event) {
		this.setState({
			caloricValue: event.target.value
		})
	},
	proteinChanged(event) {
		this.setState({
			protein: event.target.value
		})
	},
	fatChanged(event) {
		this.setState({
			fat: event.target.value
		})
	},
	carbohydratesChanged(event) {
		this.setState({
			carbohydrates: event.target.value
		})
	},
	roughageChanged(event) {
		this.setState({
			roughage: event.target.value
		})
	},
	render() {
		return (
			<div className="pull-right">
				<Button bsStyle="success" style={{marginLeft: 20}} onClick={this.showModal}>
						<Glyphicon glyph="plus"/> Create product
				</Button>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Create product</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col md={6}>
								<Input type="text" label="Name" value={this.state.name} onChange={this.nameChanged} />
								<Input type="number" label="Caloric Value" addonAfter="kcal" value={this.state.caloricValue} onChange={this.caloricValueChanged} />
								<Input type="number" label="Protein" addonAfter="g" value={this.state.protein} onChange={this.proteinChanged} />
							</Col>
							<Col md={6}>
								<Input type="number" label="Fat" addonAfter="g" value={this.state.fat} onChange={this.fatChanged} />
								<Input type="number" label="Carbohydrates" addonAfter="g" value={this.state.carbohydrates} onChange={this.carbohydratesChanged} />
								<Input type="number" label="Roughage" addonAfter="g" value={this.state.roughage} onChange={this.roughageChanged} />
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.createProduct}>
							<Glyphicon glyph="plus" /> Create
						</Button>
						<Button bsStyle="danger" style={{marginLeft: 20}} onClick={this.hideModal}>
							<Glyphicon glyph="remove" /> Cancel
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});