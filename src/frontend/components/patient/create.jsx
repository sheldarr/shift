'use strict';

import {Button, Col, ControlLabel, FormControl, FormGroup, InputGroup, Modal, Row, Radio} from 'react-bootstrap';

import toastsService from '../../services/toastsService';
import Constants from '../../../commons/constants/index';
import PatientsService from '../../services/patientsService';
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
            email: '',
            sex: Constants.sex.male
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
            sex: Constants.sex.male
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
        }, (error) => {
            error ? toastsService.error('Patient creation failed')
                : toastsService.success('Patient successfully created');
            this.props.onHide();
            this.hideModal();
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
                            <Col md={5} mdOffset={1}>
                                <FormGroup>
                                    <ControlLabel>{'Name'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.nameChanged} type="text" value={this.state.name}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Date of birth'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.dateOfBirthChanged} type="date" value={this.state.dateOfBirth}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Telephone'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.telephoneChanged} type="text" value={this.state.telephone}/>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <ControlLabel>{'Surname'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.surnameChanged} type="text" value={this.state.surname}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Age'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.surnameChanged} readOnly type="text"
                                            value={this.calculateAge()}
                                        />
                                        <InputGroup.Addon>{'years'}</InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Email'}</ControlLabel>
                                    <InputGroup>
                                        <FormControl onChange={this.emailChanged} type="email" value={this.state.email}/>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} mdOffset={1}>
                                <p>{'Gender'}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} mdOffset={1}>
                                <FormGroup>
                                    <Radio checked={this.state.sex === Constants.sex.male} inline name="sex"
                                        onChange={this.sexChanged}
                                        type="radio"
                                        value={Constants.sex.male}
                                    >{'Male'}</Radio>
                                    <Radio checked={this.state.sex === Constants.sex.female} inline name="sex"
                                        onChange={this.sexChanged}
                                        type="radio"
                                        value={Constants.sex.female}
                                    >{'Female'}</Radio>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.createPatient}>
                            {' Create'}
                        </Button>
                        <Button bsStyle="danger" onClick={this.hideModal} style={{marginLeft: '1rem'}}>
                            {' Cancel'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});
