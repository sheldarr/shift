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
                        <Input label="Name" readOnly type="text"
                            value={this.props.patient.name}
                        />
                        <label>{'Date of birth'}</label>
                        <Input readOnly type="date" value={this.props.patient.dateOfBirth} />
                        <Input label="Telephone" readOnly type="text"
                            value={this.props.patient.telephone}
                        />
                    </Col>
                    <Col md={6}>
                        <Input label="Surname" readOnly type="text"
                            value={this.props.patient.surname}
                        />
                        <Input addonAfter="years" label="Age" readOnly
                            type="text" value={this.calculateAge()}
                        />
                        <Input label="Email" readOnly type="email"
                            value={this.props.patient.email}
                        />
                    </Col>
                </Row>
                <div className="input-group">
                    <label>{' Gender'}</label>
                    <Input checked={this.props.patient.sex === Enums.sex.male} disabled label="Male"
                        name="sex" type="radio" value={Enums.sex.male}
                    />
                    <Input checked={this.props.patient.sex === Enums.sex.female} disabled label="Female"
                        name="sex" type="radio" value={Enums.sex.female}
                    />
                </div>
            </Panel>
		);
    }
});
