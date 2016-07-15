'use strict';

import {Button, Col, ControlLabel, FormControl, FormGroup, Panel, Row} from 'react-bootstrap';

import React from 'react';

const Login = React.createClass({
    getInitialState () {
        return {
            username: '',
            password: ''
        };
    },

    usernameChanged (event) {
        this.setState({username: event.target.value});
    },

    passwordChanged (event) {
        this.setState({password: event.target.value});
    },

    render () {
        return (
            <Row>
                <Col md={6} mdPush={3}>
                    <Panel header={'Login'}>
                        <FormGroup>
                            <ControlLabel>{'Username'}</ControlLabel>
                            <FormControl onChange={this.usernameChanged} type="text"
                                value={this.state.username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{'Password'}</ControlLabel>
                            <FormControl min="1" onChange={this.passwordChanged} type="password"
                                value={this.state.password}
                            />
                        </FormGroup>
                        <Col md={4} mdPush={4}>
                            <Button block bsStyle="primary">{'Login'}</Button>
                        </Col>
                    </Panel>
                </Col>
            </Row>
        );
    }
});

export default Login;

