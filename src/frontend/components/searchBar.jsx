'use strict';

import {FormControl, FormGroup, InputGroup} from 'react-bootstrap';

import React from 'react';

module.exports = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string.isRequired
    },
    handleChange (event) {
        this.props.onChange(event.target.value);
    },
    render () {
        return (
            <FormGroup>
                <InputGroup>
                    <FormControl onChange={this.handleChange} placeholder={this.props.placeholder} type="text"/>
                </InputGroup>
            </FormGroup>
        );
    }
});
