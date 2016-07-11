'use strict';

import {Panel} from 'react-bootstrap';

import CreatePatient from '../components/patient/create.jsx';
import PatientsList from '../components/patientsList.jsx';
import PatientsService from '../src/frontend/services/patientsService';
import React from 'react';
import SearchBar from '../components/searchBar.jsx';
import _ from 'lodash';

const Patients = React.createClass({
    getInitialState () {
        return {searchExpression: '', patients: [], filteredPatients: []};
    },

    componentDidMount () {
        this.refreshList();
    },

    searchExpressionChanged (searchExpression) {
        this.setState({searchExpression});

        this.refreshFilter();
    },

    refreshList () {
        PatientsService.getAll().then((response) => {
            this.setState({patients: response, filteredPatients: response});
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    refreshFilter () {
        this.setState({
            filteredPatients: _.filter(this.state.patients, (patient) =>
                patient.name.toLowerCase().indexOf(this.state.searchExpression.toLowerCase()) > -1)
        });
    },

    render () {
        return (
            <Panel header={'Patients'}>
                <CreatePatient onHide={this.refreshList} />
                <SearchBar onChange={this.searchExpressionChanged} placeholder="Search patient" searchExpression={this.state.searchExpression}/>
                <PatientsList onChange={this.refreshList} patients={this.state.filteredPatients}/>
            </Panel>
		);
    }
});

export default Patients;
