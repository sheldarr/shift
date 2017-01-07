'use strict';

import {Button} from 'react-bootstrap';

import toastsService from '../../services/toastsService';
import ConfirmationModal from '../confirmationModal.jsx';
import PatientsService from '../../services/patientsService';
import React from 'react';

const RemovePatient = React.createClass({
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
        PatientsService.delete(this.props.patient.id, (error) => {
            error ? toastsService.error('Patient delete failed')
                : toastsService.success('Patient successfully deleted');
            this.props.onRemove();
        });
    },

    render () {
        return (
            <div className="pull-right">
                <Button bsStyle="danger" onClick={this.showModal}>
                    {'Remove'}
                </Button>
                <ConfirmationModal body={`Do you really want to remove patient ${this.props.patient.name}?`} onHide={this.hideModal} show={this.state.showModal}
                    title="Remove patient"
                />
            </div>
        );
    }
});

export default RemovePatient;
