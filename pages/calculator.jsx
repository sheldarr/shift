'use strict';

import {Col, ControlLabel, FormControl, FormGroup, InputGroup, Panel, Radio, Row} from 'react-bootstrap';

import IndexCalculator from '../src/commons/indexCalculator';
import React from 'react';

import constants from '../src/commons/constants';

module.exports = React.createClass({
    getInitialState () {
        return {
            weight: 65,
            height: 180,
            age: 23,
            sex: constants.sex.male,
            physicalActivityRate: 1.6,
            waistCircumference: 0.5,
            hipCircumference: 1
        };
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
            <Panel header={'Calculator'}>
                <Row>
                    <Col md={6}>
                        <Panel header="Data">
                            <FormGroup>
                                <ControlLabel>{'Weight'}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.weightChanged} type="number"
                                        value={this.state.weight}
                                    />
                                    <InputGroup.Addon>{'kg'}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Height'}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.heightChanged} type="number"
                                        value={this.state.height}
                                    />
                                    <InputGroup.Addon>{'cm'}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Age'}</ControlLabel>
                                <InputGroup>
                                    <FormControl min="1" onChange={this.ageChanged} type="number"
                                        value={this.state.age}
                                    />
                                    <InputGroup.Addon>{'years'}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Physical Activity Rate'}</ControlLabel>
                                <FormControl min="0.1" onChange={this.physicalActivityRateChanged} step="0.1"
                                    type="number" value={this.state.physicalActivityRate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Waist Circumference'}</ControlLabel>
                                <FormControl min="0.1" onChange={this.waistCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.waistCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Hip Circumference'}</ControlLabel>
                                <FormControl min="0.1" onChange={this.hipCircumferenceChanged} step="0.1"
                                    type="number" value={this.state.hipCircumference}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Gender'}</ControlLabel>
                                <Radio checked={this.state.sex === constants.sex.male} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.male}
                                >
                                {'Male'}
                                </Radio>
                                <Radio checked={this.state.sex === constants.sex.female} name="sex"
                                    onChange={this.sexChanged} value={constants.sex.female}
                                >
                                {'Female'}
                                </Radio>
                            </FormGroup>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header="Results">
                            <FormGroup>
                                <ControlLabel>{'BMI (Body Mass Index)'}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateBmi()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'BMR (Basal Metabolic Rate)'}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateBmr()}/>
                                    <InputGroup.Addon>{'kcal / day'}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'TMR (Total Metabolic Rate)'}</ControlLabel>
                                <InputGroup>
                                    <FormControl readOnly type="number" value={this.calculateTmr()}/>
                                    <InputGroup.Addon>{'kcal / day'}</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'WHR (Waist to Hip Ratio)'}</ControlLabel>
                                <FormControl readOnly type="number" value={this.calculateWhr()}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Obesity Type'}</ControlLabel>
                                <FormControl readOnly type="text" value={this.getObesityType()}/>
                            </FormGroup>
                        </Panel>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
