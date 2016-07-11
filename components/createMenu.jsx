'use strict';

import {Button, Input, Modal} from 'react-bootstrap';

import MenuService from '../services/menuService';
import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
    propTypes: {
        onHide: React.PropTypes.func.isRequired,
        patientId: React.PropTypes.number.isRequired
    },

    getInitialState () {
        return {
            showModal: false,
            name: '',
            days: 0,
            startDate: moment()
        };
    },

    showModal () {
        this.setState({
            showModal: true
        });
    },

    hideModal () {
        this.setState({
            showModal: false
        });
    },

    nameChanged (event) {
        this.setState({
            name: event.target.value
        });
    },

    daysChanged (event) {
        this.setState({
            days: event.target.value
        });
    },

    startDateChanged (event) {
        this.setState({
            startDate: moment(event.target.value)
        });
    },

    createMenu () {
        MenuService.create(this.props.patientId, {
            id: Math.floor((Math.random() * 65535) + 1),
            name: this.state.name,
            days: this.state.days,
            startDate: this.state.startDate
        }).then(() => {
            this.props.onHide();
            this.hideModal();
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    render () {
        return (
            <div>
                <Button block bsStyle="success" onClick={this.showModal} >
                    {'Create menu'}
                </Button>
                <Modal onHide={this.hideModal} show={this.state.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{'Create menu'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input label="Name" onChange={this.nameChanged} type="text"
                            value={this.state.name}
                        />
                        <Input label="Days" min="1" onChange={this.daysChanged}
                            type="number" value={this.state.days}
                        />
                        <label>{'Start date'}</label>
                        <Input mode="date" onChange={this.startDateChanged} value={this.state.startDate} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.createMenu}>
                            {'Create'}
                        </Button>
                        <Button bsStyle="danger" onClick={this.hideModal} style={{marginLeft: 20}}>
                            {'Cancel'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
		);
    }
});
