'use strict';

import {
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    InputGroup,
    Panel,
    Radio,
    Row
} from 'react-bootstrap';

import Constants from '../../../commons/constants';
import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
    propTypes: {
        patient: React.PropTypes.object.isRequired
    },

    calculateAge() {
        return moment().diff(this.props.patient.dateOfBirth, 'years');
    },

    render() {
        return (
            <Panel header="Information">
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>{'Name'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="text" value={this.props.patient.name}/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Date of birth'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="date" value={this.props.patient.dateOfBirth || ''}/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Telephone'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="text" value={this.props.patient.telephone || ''}/>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>{'Surname'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="text" value={this.props.patient.surname || ''}/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Age'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="text" value={this.calculateAge()}/>
                                <InputGroup.Addon>{'years'}</InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Email'}</ControlLabel>
                            <InputGroup>
                                <FormControl readOnly type="email" value={this.props.patient.email || ''}/>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <p>{'Gender'}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Radio checked={this.props.patient.sex === Constants.sex.male} disabled inline name="sex" type="radio" value={Constants.sex.male}>{'Male'}</Radio>
                            <Radio checked={this.props.patient.sex === Constants.sex.female} disabled inline name="sex" type="radio" value={Constants.sex.female}>{'Female'}</Radio>
                        </FormGroup>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
