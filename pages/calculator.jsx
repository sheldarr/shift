'use strict';

import {Col, ControlLabel, FormControl, FormGroup, InputGroup, Panel, Radio, Row} from 'react-bootstrap';

import IndexCalculator from '../src/commons/indexCalculator';
import React from 'react';

import constants from '../src/commons/constants';
import resourcesService from '../src/frontend/services/resourcesService';

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
            resources: {}
        };
    },

    componentDidMount () {
        resourcesService.getByPage('calculator')
            .then((resources) => {
                this.setState({resources});
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
            <Panel header={this.state.resources.calculator}>
                <Row>
                    <Col md={6}>
                        <Panel header={this.state.resources.data}>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.weight}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.weightChanged} type="number"
                                        value={this.state.weight}
                                    />
                                    <InputGroup.Addon>{this.state.resources.kg}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.height}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.heightChanged} type="number"
                                        value={this.state.height}
                                    />
                                    <InputGroup.Addon>{this.state.resources.cm}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.age}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.ageChanged} type="number"
                                        value={this.state.age}
                                    />
                                    <InputGroup.Addon>{this.state.resources.years}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.physicalActivityRate}</ControlLabel>
                                <FormControl min="0.1" onChange={this.physicalActivityRateChanged} step="0.1"
                                    type="number" value={this.state.physicalActivityRate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.waistCircumference}</ControlLabel>
                                <FormControl min="0.1" onChange={this.waistCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.waistCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.hipCircumference}</ControlLabel>
                                <FormControl min="0.1" onChange={this.hipCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.hipCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.gender}</ControlLabel>
                                <Radio checked={this.state.sex == constants.sex.male} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.male}
                                >
                                {this.state.resources.male}
                                </Radio>
                                <Radio checked={this.state.sex == constants.sex.female} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.female}
                                >
                                {this.state.resources.female}
                                </Radio>
                            </FormGroup>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header="Results">
                            <FormGroup>
                                <ControlLabel>{this.state.resources.bmi}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateBmi()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.bmr}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateBmr()}/>
                                    <InputGroup.Addon>{this.state.resources.kcalPerDay}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.tmr}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateTmr()}/>
                                    <InputGroup.Addon>{this.state.resources.kcalPerDay}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.whr}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateWhr()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{this.state.resources.obesityType}</ControlLabel>
                                <FormControl readOnly type="text" value={this.getObesityType()}/>
                            </FormGroup>
                        </Panel>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
