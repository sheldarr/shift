'use strict';

import {
    Alert,
    Button,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Grid,
    Panel,
    Row
} from 'react-bootstrap';
import authService from '../services/authService';

import React from 'react';
import {browserHistory} from 'react-router';

const Login = React.createClass({
    getInitialState() {
        return {username: '', password: '', displayError: false};
    },

    usernameChanged(event) {
        this.setState({username: event.target.value});
    },

    passwordChanged(event) {
        this.setState({password: event.target.value});
    },

    login() {
        authService.login(this.state.username, this.state.password, (error) => {
            if (error) {
                this.setState({displayError: true});
                return;
            }

            browserHistory.push('/');
        });
    },

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6} mdPush={3} style={{
                        paddingTop: "3rem"
                    }}>
                        <Panel header={'Login'}>
                            <FormGroup>
                                <ControlLabel>{'Username'}</ControlLabel>
                                <FormControl name="username" onChange={this.usernameChanged} type="text" value={this.state.username}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>{'Password'}</ControlLabel>
                                <FormControl name="password" onChange={this.passwordChanged} type="password" value={this.state.password}/>
                            </FormGroup>
                            {this.state.displayError
                                ? (
                                    <Alert bsStyle="danger">
                                        {'Wrong username or password.'}
                                    </Alert>
                                )
                                : null
}
                            <Col md={4} mdPush={4}>
                                <Button block bsStyle="primary" disabled={!this.state.username || !this.state.password} onClick={this.login}>
                                    {'Login'}
                                </Button>
                            </Col>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Login;
