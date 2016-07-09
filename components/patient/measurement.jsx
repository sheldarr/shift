'use strict';

import {Col, Input, Panel, Row} from 'react-bootstrap';

import IndexCalculator from '../../logic/indexCalculator';
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
                        <Input addonAfter="kg" label="Weight" type="number"
                            readOnly value={this.props.measurement.weight}
                        />
                        <Input addonAfter="cm" label="Height" type="number" readOnly value={this.props.measurement.height} />
                        <Input label="Physical activity rate" type="number" readOnly value={this.props.measurement.physicalActivityRate} />
                        <Input addonAfter="cm" label="Waist Circumference" type="number"
                            readOnly value={this.props.measurement.waistCircumference} />
                        <Input addonAfter="cm" label="Hip Circumference" type="number" readOnly value={this.props.measurement.hipCircumference} />
                    </Col>
                    <Col md={6}>
                        <Input label="BMI (Body Mass Index)" type="number" readOnly value={this.calculateBmi()} />
                        <Input addonAfter="kcal / day" label="BMR (Basal Metabolic Rate)" type="number" readOnly value={this.calculateBmr()} />
                        <Input addonAfter="kcal / day" label="TMR (Total Metabolic Rate)" type="number" readOnly value={this.calculateTmr()} />
                        <Input label="WHR (Waist to Hip Ratio)" type="number" readOnly value={this.calculateWhr()} />
                        <Input label="Obesity Type" type="text" readOnly value={this.getObesityType()} />
                    </Col>
                </Row>
            </Panel>
        );
    }
});
