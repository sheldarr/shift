'use strict';

import {Col, ControlLabel, FormControl, FormGroup, InputGroup, Panel, Row} from 'react-bootstrap';

import IndexCalculator from '../../src/commons/indexCalculator';
import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
    propTypes: {
        measurement: React.PropTypes.object.isRequired
    },

    calculateBmi () {
        return (IndexCalculator.calculateBmi(this.props.measurement.weight, this.props.measurement.height)).toFixed(2);
    },

    calculateBmr () {
        const age = this.calculateAge();

        return (IndexCalculator.calculateBmr(this.props.measurement.weight,
            this.props.measurement.height, age,
            this.props.measurement.sex)).toFixed(2);
    },

    calculateTmr () {
        const age = this.calculateAge();

        return (IndexCalculator.calculateTmr(this.props.measurement.weight,
            this.props.measurement.height, age,
            this.props.measurement.sex, this.props.measurement.physicalActivityRate)).toFixed(2);
    },

    getBmiCategory () {
        return IndexCalculator.getBmiCategory(this.props.measurement.weight,
            this.props.measurement.height);
    },

    calculateWhr () {
        return (IndexCalculator.calculateWhr(this.props.measurement.waistCircumference,
            this.props.measurement.hipCircumference)).toFixed(2);
    },

    getObesityType () {
        return IndexCalculator.getObesityType(this.props.measurement.waistCircumference,
            this.props.measurement.hipCircumference, this.props.measurement.sex);
    },

    calculateAge () {
        return moment().diff(this.props.measurement.dateOfBirth, 'years');
    },

    render () {
        return (
            <Panel header={`Measurement ${this.props.measurement.date}`}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>{'Weight'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.props.measurement.weight}
                                />
                            <InputGroup.Addon>{'kg'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Height'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.props.measurement.height}
                                />
                                <InputGroup.Addon>{'cm'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Physical activity rate'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.props.measurement.physicalActivityRate}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Waist Circumference'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.props.measurement.waistCircumference}
                                />
                                <InputGroup.Addon>{'cm'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Hip Circumference'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.props.measurement.hipCircumference}
                                />
                                <InputGroup.Addon>{'cm'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>{'BMI (Body Mass Index)'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.calculateBmi()}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'BMR (Basal Metabolic Rate)'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.calculateBmr()}
                                />
                                <InputGroup.Addon>{'kcal / day'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'TMR (Total Metabolic Rate)'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.calculateTmr()}
                                />
                                <InputGroup.Addon>{'kcal / day'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'WHR (Waist to Hip Ratio)'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="number"
                                    value={this.calculateTmr()}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Obesity Type'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="text"
                                    value={this.getObesityType()}
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
