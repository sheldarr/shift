'use strict';

import {Button, Col, Panel, Row} from 'react-bootstrap';

// import CreateMenu from '../components/createMenu';
import Constants from '../../commons/constants';
import MenusList from '../../../components/menusList.jsx';
import PatientInformation from '../../../components/patient/information.jsx';
import PatientMeasurement from '../../../components/patient/measurement.jsx';
import React from 'react';

import patientsService from '../services/patientsService';

module.exports = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },

    getInitialState () {
        return {
            patient: {
                id: 0,
                name: '',
                weight: 0,
                height: 0,
                age: 0,
                factor: 0,
                sex: Constants.sex.male,
                measurements: [{
                    id: 0,
                    date: '01-01.1970',
                    weight: 0,
                    height: 0,
                    physicalActivityRate: 1.0,
                    waistCircumference: 0,
                    hipCircumference: 0
                }],
                menus: []
            }
        };
    },

    componentDidMount () {
        this.reloadPatient();
    },

    reloadPatient () {
        patientsService.getById(this.props.params.patientId, (error, request) => {
            this.setState({patient: request.body});
        });
    },

    render () {
        return (
            <Panel header={this.state.patient.name}>
                <Row>
                    <Col md={6}>
                        <PatientInformation patient={this.state.patient} />
                    </Col>
                    <Col md={6}>
                        <PatientMeasurement measurement={this.state.patient.measurements[this.state.patient.measurements.length - 1]} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Panel header="Menus">
                            <MenusList menus={this.state.patient.menus}
                                patientId={this.state.patient.id}
                            />
                            {/* <CreateMenu onHide={this.reloadPatient} patientId={this.state.patient.id} />*/}
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Button bsStyle="primary" href="/patients">
                            {'Back'}
                        </Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
});
