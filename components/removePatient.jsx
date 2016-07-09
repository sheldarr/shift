'use strict';

import {Button, Glyphicon} from 'react-bootstrap';

import ConfirmationModal from './confirmationModal.jsx';
import PatientsService from '../services/patientsService';
import React from 'react';

module.exports = React.createClass({
    propTypes: {
        onRemove: React.PropTypes.func.isRequired,
        patient: React.PropTypes.object.isRequired
    },

    getInitialState () {
        return {
            showModal: false
        };
    },

    showModal () {
        this.setState({
            showModal: true
        });
    },

    hideModal (confirmed) {
        if (confirmed) {
            this.removePatient();
        }

        this.setState({
            showModal: false
        });
    },

    removePatient () {
        PatientsService.delete(this.props.patient.id)
        .then(() => {
            this.props.onRemove();
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    render () {
        return (
            <div className="pull-right">
                <Button bsStyle="danger" onClick={this.showModal}>
                    <Glyphicon glyph="remove"/> {'Remove'}
                </Button>
                <ConfirmationModal body={`Do you really want to remove patient ${this.props.patient.name}?`} onHide={this.hideModal} show={this.state.showModal}
                    title="Remove patient"
                />
            </div>
		);
    }
});
