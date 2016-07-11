'use strict';

import {Button, Col, Input, Modal, Row} from 'react-bootstrap';

import Contants from '../../src/commons/constants/index';
import PatientsService from '../../src/frontend/services/patientsService';
import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
    propTypes: {
        onHide: React.PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            showModal: false,
            name: '',
            surname: '',
            dateOfBirth: moment().format('YYYY-MM-DD'),
            telephone: '',
            emial: '',
            sex: 0
        };
    },

    showModal () {
        this.setState({
            showModal: true,
            name: '',
            surname: '',
            dateOfBirth: moment().format('YYYY-MM-DD'),
            telephone: '',
            email: '',
            sex: 0
        });
    },

    hideModal () {
        this.setState({showModal: false});
    },

    createPatient () {
        PatientsService.create({
            id: Math.floor((Math.random() * 65535) + 1),
            name: this.state.name,
            surname: this.state.surname,
            dateOfBirth: this.state.dateOfBirth,
            telephone: this.state.telephone,
            email: this.state.email,
            sex: this.state.sex
        }).then(() => {
            this.props.onHide();
            this.hideModal();
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    nameChanged (event) {
        this.setState({name: event.target.value});
    },

    surnameChanged (event) {
        this.setState({surname: event.target.value});
    },

    dateOfBirthChanged (event) {
        this.setState({dateOfBirth: moment(event.target.value).format('YYYY-MM-DD')});
    },

    telephoneChanged (event) {
        this.setState({telephone: event.target.value});
    },

    emailChanged (event) {
        this.setState({email: event.target.value});
    },

    sexChanged (event) {
        this.setState({sex: event.target.value});
    },

    calculateAge () {
        return moment().diff(this.state.dateOfBirth, 'years');
    },


    render () {
        return (
            <div className="pull-right">
                <Button bsStyle="success" onClick={this.showModal} style={{marginLeft: 20}} >
                    {' Create patient'}
                </Button>
                <Modal onHide={this.hideModal} show={this.state.showModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {' Create patient'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <Input label="Name" onChange={this.nameChanged} type="text"
                                    value={this.state.name}
                                />
                                <label>{' Date of birth'}</label>
                                <Input onChange={this.dateOfBirthChanged} type="date" value={this.state.dateOfBirth} />
                                <Input label="Telephone" onChange={this.telephoneChanged} type="text"
                                    value={this.state.telephone}
                                />
                            </Col>
                            <Col md={6}>
                                <Input label="Surname" onChange={this.surnameChanged} type="text"
                                    value={this.state.surname}
                                />
                                <Input addonAfter="years" label="Age"
                                    readOnly type="text" value={this.calculateAge()}
                                />
                                <Input label="Email" onChange={this.emailChanged} type="email"
                                    value={this.state.email}
                                />
                            </Col>
                        </Row>
                        <div className="input-group">
                            <label>{' Gender'}</label>
                            <Input checked={this.state.sex === Contants.sex.male} label="Male" name="sex"
                                onChange={this.sexChanged}
                                type="radio"
                                value={Contants.sex.male}
                            />
                            <Input checked={this.state.sex === Contants.sex.female} label="Female" name="sex"
                                onChange={this.sexChanged}
                                type="radio"
                                value={Contants.sex.female}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.createPatient}>
                            {' Create'}
                        </Button>
                        <Button bsStyle="danger" onClick={this.hideModal} style={{marginLeft: 20}}>
                            {' Cancel'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});
