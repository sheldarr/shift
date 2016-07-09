'use strict';

import {Col, Input, Panel, Row} from 'react-bootstrap';

import Enums from '../../api/enums';
import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
    propTypes: {
        patient: React.propTypes.object.isRequired
    },

    calculateAge () {
        return moment().diff(this.props.patient.dateOfBirth, 'years');
    },

    render () {
        return (
            <Panel header="Information">
                <Row>
                    <Col md={6}>
                        <Input label="Name" type="text"
                            readOnly value={this.props.patient.name} />
                        <label>{' Date of birth'}</label>
                        <Input type="date" readOnly value={this.props.patient.dateOfBirth} />
                        <Input label="Telephone" type="text" readOnly value={this.props.patient.telephone} />
                    </Col>
                    <Col md={6}>
                        <Input label="Surname" type="text" readOnly value={this.props.patient.surname} />
                        <Input addonAfter="years" label="Age" type="text" readOnly value={this.calculateAge()} />
                        <Input label="Email" type="email" readOnly value={this.props.patient.email} />
                    </Col>
                </Row>
                <div className="input-group">
                    <label>{' Gender'}</label>
                    <Input checked={this.props.patient.sex === Enums.sex.male} disabled value={Enums.sex.male}
                        label="Male" name="sex" type="radio" />
                    <Input checked={this.props.patient.sex === Enums.sex.female} label="Female" name="sex"
                        type="radio" disabled value={Enums.sex.female} />
                </div>
            </Panel>
		);
    }
});
