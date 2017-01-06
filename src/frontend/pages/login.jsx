'use strict';

import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row} from 'react-bootstrap';

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
            <Grid>
                <Row>
                    <Col md={6} mdPush={3}>
                        <Panel header={'Login'}>
                            <Form action="/auth/local" method="POST">
                                <FormGroup>
                                    <ControlLabel>{'Username'}</ControlLabel>
                                    <FormControl name="username" onChange={this.usernameChanged} type="text"
                                        value={this.state.username}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>{'Password'}</ControlLabel>
                                    <FormControl name="password" onChange={this.passwordChanged} type="password"
                                        value={this.state.password}
                                    />
                                </FormGroup>
                                <Col md={4} mdPush={4}>
                                    <Button block bsStyle="primary" disabled={!this.state.username || !this.state.password}
                                        type="submit"
                                    >
                                        {'Login'}
                                    </Button>
                                </Col>
                            </Form>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Login;

