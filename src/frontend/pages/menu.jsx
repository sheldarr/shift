'use strict';

import {Panel} from 'react-bootstrap';

import MenuService from '../../services/menuService';
import PatientsService from '../../services/patientsService';
import React from 'react';

module.exports = React.createClass({
    propTypes: {
        params: React.PropTypes.array.isRequired
    },

    getInitialState () {
        return {
            patient: {
                id: 0,
                name: '',
                weight: 0,
                height: 0,
                age: 0,
                factor: 0,
                sex: 0
            },
            menu: {
                id: 0,
                name: '',
                days: 0,
                startDate: 0
            }
        };
    },

    componentDidMount () {
        this.refreshMenu();
    },

    refreshMenu () {
        PatientsService.getById(this.props.params.patientId, (error, request) => {
            this.setState({patient: request.body});
        });

        MenuService.getById(this.props.params.patientId, this.props.params.menuId, (error, request) => {
            this.setState({menu: request.body});
        });
    },

    render () {
        return (
            <Panel header={this.state.menu.name}/>
        );
    }
});
