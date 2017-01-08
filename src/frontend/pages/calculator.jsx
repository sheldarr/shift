'use strict';

import {Col, ControlLabel, FormControl, FormGroup, InputGroup, Panel, Radio, Row} from 'react-bootstrap';

import IndexCalculator from '../../commons/indexCalculator';
import React from 'react';

import constants from '../../commons/constants';
import resourcesService from '../../frontend/services/resourcesService';

module.exports = React.createClass({
    getInitialState () {
        return {
            weight: 65,
            height: 180,
            age: 23,
            sex: constants.sex.male,
            physicalActivityRate: 1.6,
            waistCircumference: 0.5,
            hipCircumference: 1,
            resources: {commons: {genders: {}, units: {}}, page: {}}
        };
    },

    componentDidMount () {
        resourcesService.getByPage('calculator', (error, request) => {
                this.setState({resources: request.body});
            });
    },

    weightChanged (event) {
        const weight = Math.min(Math.max(event.target.value, 0), 400);

        this.setState({weight});
    },

    heightChanged (event) {
        const height = Math.min(Math.max(event.target.value, 0), 272);

        this.setState({height});
    },

    ageChanged (event) {
        const age = Math.min(Math.max(event.target.value, 0), 122);

        this.setState({age});
    },

    physicalActivityRateChanged (event) {
        const physicalActivityRate = Math.min(Math.max(event.target.value, 0), 16);

        this.setState({physicalActivityRate});
    },

    sexChanged (event) {
        this.setState({sex: event.target.value});
    },

    waistCircumferenceChanged (event) {
        this.setState({waistCircumference: event.target.value});
    },

    hipCircumferenceChanged (event) {
        this.setState({hipCircumference: event.target.value});
    },

    calculateBmi () {
        return (IndexCalculator.calculateBmi(this.state.weight, this.state.height)).toFixed(2);
    },

    calculateBmr () {
        return (IndexCalculator.calculateBmr(this.state.weight, this.state.height, this.state.age, this.state.sex)).toFixed(2);
    },

    calculateTmr () {
        return (IndexCalculator.calculateTmr(this.state.weight, this.state.height, this.state.age, this.state.sex, this.state.physicalActivityRate)).toFixed(2);
    },

    calculateWhr () {
        return (IndexCalculator.calculateWhr(this.state.waistCircumference, this.state.hipCircumference)).toFixed(2);
    },

    getObesityType () {
        return IndexCalculator.getObesityType(this.state.waistCircumference, this.state.hipCircumference, this.state.sex);
    },

    render () {
        return (
            <Panel header={this.state.resources.page.calculator}>
                <Row>
                    <Col md={6}>
                        <Panel header={this.state.resources.page.data}>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.weight}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.weightChanged} type="number"
                                        value={this.state.weight}
                                    />
                                    <InputGroup.Addon>{this.state.resources.commons.units.kg}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.height}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.heightChanged} type="number"
                                        value={this.state.height}
                                    />
                                    <InputGroup.Addon>{this.state.resources.commons.units.cm}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.age}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.ageChanged} type="number"
                                        value={this.state.age}
                                    />
                                    <InputGroup.Addon>{this.state.resources.commons.units.years}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.physicalActivityRate}</ControlLabel>
                                <FormControl min="0.1" onChange={this.physicalActivityRateChanged} step="0.1"
                                    type="number" value={this.state.physicalActivityRate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.waistCircumference}</ControlLabel>
                                <FormControl min="0.1" onChange={this.waistCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.waistCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.hipCircumference}</ControlLabel>
                                <FormControl min="0.1" onChange={this.hipCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.hipCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.gender}</ControlLabel>
                                <Radio checked={this.state.sex == constants.sex.male} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.male}
                                >
                                {this.state.resources.commons.genders.male}
                                </Radio>
                                <Radio checked={this.state.sex == constants.sex.female} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.female}
                                >
                                {this.state.resources.commons.genders.female}
                                </Radio>
                            </FormGroup>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header={this.state.resources.page.results}>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.bmi}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateBmi()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.bmr}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateBmr()}/>
                                    <InputGroup.Addon>{this.state.resources.commons.units.kcalPerDay}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.tmr}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateTmr()}/>
                                    <InputGroup.Addon>{this.state.resources.commons.units.kcalPerDay}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.whr}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateWhr()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.page.obesityType}</ControlLabel>
                                <FormControl readOnly type="text" value={this.getObesityType()}/>
                            </FormGroup>
                        </Panel>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
