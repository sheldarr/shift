'use strict';

import {Button, Col, Glyphicon, Input, Modal, Row} from 'react-bootstrap';

import ProductsService from '../../services/productsService';
import React from 'react';

module.exports = React.createClass({
    propTypes: {
        onHide: React.PropTypes.func.isRequired
    },
    getInitialState () {
        return {
            showModal: false,
            name: '',
            energyValue: 0,
            protein: 0,
            fat: 0,
            carbohydrates: 0,
            fiber: 0,
            sodium: 0,
            potassium: 0,
            calcium: 0,
            phosphorus: 0,
            iron: 0,
            magnesium: 0,
            vitaminA: 0,
            betaCarotene: 0,
            vitaminE: 0,
            thiamine: 0,
            riboflavin: 0,
            niacin: 0,
            vitaminC: 0
        };
    },
    showModal () {
        this.setState({
            showModal: true,
            name: '',
            energyValue: 0,
            protein: 0,
            fat: 0,
            carbohydrates: 0,
            fiber: 0,
            sodium: 0,
            potassium: 0,
            calcium: 0,
            phosphorus: 0,
            iron: 0,
            magnesium: 0,
            vitaminA: 0,
            betaCarotene: 0,
            vitaminE: 0,
            thiamine: 0,
            riboflavin: 0,
            niacin: 0,
            vitaminC: 0
        });
    },
    hideModal () {
        this.setState({showModal: false});
    },
    createProduct () {
        ProductsService.create({
            id: Math.floor((Math.random() * 65535) + 1),
            name: this.state.name,
            energyValue: this.state.energyValue,
            protein: this.state.protein,
            fat: this.state.fat,
            carbohydrates: this.state.carbohydrates,
            fiber: this.state.fiber,
            sodium: this.state.sodium,
            potassium: this.state.potassium,
            calcium: this.state.calcium,
            phosphorus: this.state.phosphorus,
            iron: this.state.iron,
            magnesium: this.state.magnesium,
            vitaminA: this.state.vitaminA,
            betaCarotene: this.state.betaCarotene,
            vitaminE: this.state.vitaminE,
            thiamine: this.state.thiamine,
            riboflavin: this.state.riboflavin,
            niacin: this.state.niacin,
            vitaminC: this.state.vitaminC
        }).then(() => {
            this.props.onHide();
            this.hideModal();
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },
    nameChanged(event) {
        this.setState({name: event.target.value})
    },
    energyValueChanged(event) {
        this.setState({energyValue: event.target.value})
    },
    proteinChanged(event) {
        this.setState({protein: event.target.value})
    },
    fatChanged(event) {
        this.setState({fat: event.target.value})
    },
    carbohydratesChanged(event) {
        this.setState({carbohydrates: event.target.value})
    },
    fiberChanged(event) {
        this.setState({fiber: event.target.value})
    },
    sodiumChanged(event) {
        this.setState({sodium: event.target.value})
    },
    potassiumChanged(event) {
        this.setState({potassium: event.target.value})
    },
    calciumChanged(event) {
        this.setState({calcium: event.target.value})
    },
    phosphorusChanged(event) {
        this.setState({phosphorus: event.target.value})
    },
    ironChanged(event) {
        this.setState({iron: event.target.value})
    },
    magnesiumChanged(event) {
        this.setState({magnesium: event.target.value})
    },
    vitaminAChanged(event) {
        this.setState({vitaminA: event.target.value})
    },
    betaCaroteneChanged(event) {
        this.setState({betaCarotene: event.target.value})
    },
    vitaminEChanged(event) {
        this.setState({vitaminE: event.target.value})
    },
    thiamineChanged(event) {
        this.setState({thiamine: event.target.value})
    },
    riboflavinChanged(event) {
        this.setState({riboflavin: event.target.value})
    },
    niacinChanged(event) {
        this.setState({niacin: event.target.value})
    },
    vitaminCChanged(event) {
        this.setState({vitaminC: event.target.value})
    },
    render() {
        return (
            <div className="pull-right">
                <Button bsStyle="success" style={{
                    marginLeft: 20
                }} onClick={this.showModal}>
                    <Glyphicon glyph="plus"/>
                    Create product
                </Button>
                <Modal show={this.state.showModal} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input type="text" label="Name" value={this.state.name} onChange={this.nameChanged}/>
                        <Row>
                            <Col md={4}>
                                <Input type="number" label="Energy Value" addonAfter="kcal" value={this.state.energyValue} onChange={this.energyValueChanged}/>
                                <Input type="number" label="Protein" addonAfter="g" value={this.state.protein} onChange={this.proteinChanged}/>
                                <Input type="number" label="Fat" addonAfter="g" value={this.state.fat} onChange={this.fatChanged}/>
                                <Input type="number" label="Carbohydrates" addonAfter="g" value={this.state.carbohydrates} onChange={this.carbohydratesChanged}/>
                                <Input type="number" label="Fiber" addonAfter="g" value={this.state.fiber} onChange={this.fiberChanged}/>
                                <Input type="number" label="Sodium" addonAfter="mg" value={this.state.sodium} onChange={this.sodiumChanged}/>
                            </Col>
                            <Col md={4}>
                                <Input type="number" label="Potassium" addonAfter="mg" value={this.state.potassium} onChange={this.potassiumChanged}/>
                                <Input type="number" label="Calcium" addonAfter="mg" value={this.state.calcium} onChange={this.calciumChanged}/>
                                <Input type="number" label="Phosphorus" addonAfter="mg" value={this.state.phosphorus} onChange={this.phosphorusChanged}/>
                                <Input type="number" label="Iron" addonAfter="mg" value={this.state.iron} onChange={this.ironChanged}/>
                                <Input type="number" label="Magnesium" addonAfter="mg" value={this.state.magnesium} onChange={this.magnesiumChanged}/>
                                <Input type="number" label="Vitamin A" addonAfter="μg" value={this.state.vitaminA} onChange={this.vitaminAChanged}/>
                            </Col>
                            <Col md={4}>
                                <Input type="number" label="Beta Carotene" addonAfter="μg" value={this.state.betaCarotene} onChange={this.betaCaroteneChanged}/>
                                <Input type="number" label="Vitamin E" addonAfter="mg" value={this.state.vitaminE} onChange={this.vitaminEChanged}/>
                                <Input type="number" label="Thiamine" addonAfter="mg" value={this.state.thiamine} onChange={this.thiamineChanged}/>
                                <Input type="number" label="Riboflavin" addonAfter="mg" value={this.state.riboflavin} onChange={this.riboflavinChanged}/>
                                <Input type="number" label="Niacin" addonAfter="mg" value={this.state.niacin} onChange={this.niacinChanged}/>
                                <Input type="number" label="Vitamin C" addonAfter="mg" value={this.state.vitaminC} onChange={this.vitaminCChanged}/>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.createProduct}>
                            <Glyphicon glyph="plus"/>
                            Create
                        </Button>
                        <Button bsStyle="danger" style={{
                            marginLeft: 20
                        }} onClick={this.hideModal}>
                            <Glyphicon glyph="remove"/>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});