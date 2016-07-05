'use strict';

import {Col, ControlLabel, FormControl, Glyphicon, Input, InputGroup, Panel, Row} from 'react-bootstrap';

import Enums from '../api/enums';
import IndexCalculator from '../logic/indexCalculator';
import React from 'react';

module.exports = React.createClass({
    getInitialState () {
        return {
            weight: 65,
            height: 180,
            age: 23,
            sex: Enums.sex.male,
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
            <Panel header={<span><Glyphicon glyph="heart"/>{' Calculator'}</span>}>
                <Row>
                    <Col md={6}>
                        <Panel header="Data">
                            <ControlLabel>{'Weight'}</ControlLabel>
                            <InputGroup>
                                <FormControl min="1" onChange={this.weightChanged} type="number"
                                    value={this.state.weight}
                                />
                                <InputGroup.Addon>{'kg'}</InputGroup.Addon>
                            </InputGroup>
                            <Input addonAfter="cm" label="Height" min="1"
                                onChange={this.heightChanged} type="number" value={this.state.height}
                            />
                            <Input addonAfter="years" label="Age" min="1"
                                onChange={this.ageChanged} type="number" value={this.state.age}
                            />
                            <Input label="Physical Activity Rate" min="0.1" onChange={this.physicalActivityRateChanged}
                                step="0.1" type="number" value={this.state.physicalActivityRate}
                            />
                            <Input addonAfter="cm" label="Waist Circumference" onChange={this.waistCircumferenceChanged}
                                step="0.1" type="number" value={this.state.waistCircumference}
                            />
                            <Input addonAfter="cm" label="Hip Circumference" onChange={this.hipCircumferenceChanged}
                                step="0.1" type="number" value={this.state.hipCircumference}
                            />
                            <div className="input-group">
                                <label>{'Gender'}</label>
                                <Input checked={this.state.sex == Enums.sex.male} label="Male" name="sex"
                                    onChange={this.sexChanged} type="radio" value={Enums.sex.male}
                                />
                                <Input checked={this.state.sex == Enums.sex.female} label="Female" name="sex"
                                    onChange={this.sexChanged} type="radio" value={Enums.sex.female}
                                />
                            </div>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header="Results">
                            <Input label="BMI (Body Mass Index)" readOnly type="number"
                                value={this.calculateBmi()}
                            />
                            <Input addonAfter="kcal / day" label="BMR (Basal Metabolic Rate)" readOnly
                                type="number" value={this.calculateBmr()}
                            />
                            <Input addonAfter="kcal / day" label="TMR (Total Metabolic Rate)" readOnly
                                type="number" value={this.calculateTmr()}
                            />
                            <Input label="WHR (Waist to Hip Ratio)" readOnly type="number"
                                value={this.calculateWhr()}
                            />
                            <Input label="Obesity Type" readOnly type="text"
                                value={this.getObesityType()}
                            />
                        </Panel>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
