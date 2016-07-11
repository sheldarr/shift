'use strict';

import {Panel} from 'react-bootstrap';

import MenuService from '../src/frontend/services/menuService';
import PatientService from '../src/frontend/services/patientsService';
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
        PatientService.getById(this.props.params.patientId).then((response) => {
            this.setState({patient: response});
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
        MenuService.getById(this.props.params.patientId, this.props.params.menuId).then((response) => {
            this.setState({menu: response});
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    render () {
        return (
            <Panel header={this.state.menu.name}/>
        );
    }
});
