'use strict';

import {Button, Glyphicon, Modal} from 'react-bootstrap';

import React from 'react';

const ConfirmationModal = React.createClass({
    propTypes: {
        body: React.PropTypes.string,
        onHide: React.PropTypes.func.isRequired,
        show: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string.isRequired
    },

    confirm () {
        this.props.onHide(true);
    },

    cancel () {
        this.props.onHide(false);
    },

    render () {
        return (
            <Modal onHide={this.props.onHide} show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.confirm}>
                        <Glyphicon glyph="ok"/>
                        {'Confirm'}
                    </Button>
                    <Button bsStyle="danger" onClick={this.cancel} style={{marginLeft: 20}}>
                        <Glyphicon glyph="remove"/>
                        {'Cancel'}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default ConfirmationModal;
