'use strict';

import {
    Button,
    Col,
    Collapse,
    ControlLabel,
    FormControl,
    FormGroup,
    InputGroup,
    Modal,
    Row
} from 'react-bootstrap';

import toastsService from '../../services/toastsService';
import ProductsService from '../../services/productsService';
import React from 'react';
import uuid from 'uuid';

const CreateProduct = React.createClass({
    propTypes: {
        onHide: React.PropTypes.func.isRequired
    },

    getInitialState() {
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

    showModal() {
        this.setState({
            showModal: true,
            showAdvancedNutrients: false,
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

    hideModal() {
        this.setState({showModal: false});
    },

    showAdvancedNutrients() {
        this.setState({showAdvancedNutrients: true});
    },

    hideAdvancedNutrients() {
        this.setState({showAdvancedNutrients: false});
    },

    createProduct() {
        ProductsService.create({
            id: uuid.v4(),
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
        }, (error) => {
            error ? toastsService.error('Product creation failed')
                : toastsService.success('Product successfully created');
            this.props.onHide();
            this.hideModal();
        });
    },

    nameChanged(event) {
        this.setState({name: event.target.value});
    },

    energyValueChanged(event) {
        this.setState({energyValue: event.target.value});
    },

    proteinChanged(event) {
        this.setState({protein: event.target.value});
    },

    fatChanged(event) {
        this.setState({fat: event.target.value});
    },

    carbohydratesChanged(event) {
        this.setState({carbohydrates: event.target.value});
    },

    fiberChanged(event) {
        this.setState({fiber: event.target.value});
    },

    sodiumChanged(event) {
        this.setState({sodium: event.target.value});
    },

    potassiumChanged(event) {
        this.setState({potassium: event.target.value});
    },

    calciumChanged(event) {
        this.setState({calcium: event.target.value});
    },

    phosphorusChanged(event) {
        this.setState({phosphorus: event.target.value});
    },

    ironChanged(event) {
        this.setState({iron: event.target.value});
    },

    magnesiumChanged(event) {
        this.setState({magnesium: event.target.value});
    },

    vitaminAChanged(event) {
        this.setState({vitaminA: event.target.value});
    },

    betaCaroteneChanged(event) {
        this.setState({betaCarotene: event.target.value});
    },

    vitaminEChanged(event) {
        this.setState({vitaminE: event.target.value});
    },

    thiamineChanged(event) {
        this.setState({thiamine: event.target.value});
    },

    riboflavinChanged(event) {
        this.setState({riboflavin: event.target.value});
    },

    niacinChanged(event) {
        this.setState({niacin: event.target.value});
    },

    vitaminCChanged(event) {
        this.setState({vitaminC: event.target.value});
    },

    render() {
        return (
            <div className="pull-right">
                <Button bsStyle="success" onClick={this.showModal}>
                    {'Create product'}
                </Button>
                <Modal onHide={this.hideModal} show={this.state.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{'Create product'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>{'Name'}</ControlLabel>
                            <FormControl onChange={this.nameChanged} type="text" value={this.state.name}/>
                        </FormGroup>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>{'Energy Value'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.energyValueChanged} type="number" value={this.state.energyValue}/>
                                        <InputGroup.Addon>{'kcal'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Carbohydrates'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.carbohydratesChanged} type="number" value={this.state.carbohydrates}/>
                                        <InputGroup.Addon>{'g'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>{'Protein'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.proteinChanged} type="number" value={this.state.protein}/>
                                        <InputGroup.Addon>{'g'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Fiber'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.fiberChanged} type="number" value={this.state.fiber}/>
                                        <InputGroup.Addon>{'g'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>{'Fat'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.fatChanged} type="number" value={this.state.fat}/>
                                        <InputGroup.Addon>{'g'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Sodium'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.sodiumChanged} type="number" value={this.state.sodium}/>
                                        <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div style={{marginBottom: '1rem'}}>
                            {this.state.showAdvancedNutrients
                                ? (
                                    <Button onClick={this.hideAdvancedNutrients}>
                                        {'Hide Advances Nutrients'}
                                    </Button>
                                )
                                : (
                                    <Button onClick={this.showAdvancedNutrients}>
                                        {'Show Advanced Nutrients'}
                                    </Button>
                                )}
                        </div>
                        <Collapse in={this.state.showAdvancedNutrients}>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <ControlLabel>{'Potassium'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.potassiumChanged} type="number" value={this.state.potassium}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Calcium'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.calciumChanged} type="number" value={this.state.calcium}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Phosphorus'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.phosphorusChanged} type="number" value={this.state.phosphorus}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Iron'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.ironChanged} type="number" value={this.state.iron}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Magnesium'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.magnesiumChanged} type="number" value={this.state.magnesium}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Vitamin A'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.vitaminAChanged} type="number" value={this.state.vitaminA}/>
                                            <InputGroup.Addon>{'μg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <ControlLabel>{'Beta Caroten'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.betaCaroteneChanged} type="number" value={this.state.betaCarotene}/>
                                            <InputGroup.Addon>{'μg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Vitamin E'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.vitaminEChanged} type="number" value={this.state.vitaminE}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Thiamine'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.thiamineChanged} type="number" value={this.state.thiamine}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Riboflavin'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.riboflavinChanged} type="number" value={this.state.riboflavin}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Niacin'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.niacinChanged} type="number" value={this.state.niacin}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>{'Vitamin C'}</ControlLabel>
                                        <InputGroup>
                                            <FormControl onChange={this.vitaminCChanged} type="number" value={this.state.vitaminC}/>
                                            <InputGroup.Addon>{'mg'}</InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Collapse>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.createProduct}>
                            {'Create'}
                        </Button>
                        <Button bsStyle="danger" onClick={this.hideModal} style={{
                            marginLeft: '1em'
                        }}>
                            {'Cancel'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

export default CreateProduct;
