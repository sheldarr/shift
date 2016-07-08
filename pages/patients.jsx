'use strict';

import {Glyphicon, Panel} from 'react-bootstrap';                                                           // Button?

import CreatePatient from '../components/patient/create';
import PatientsList from '../components/patientsList';
import PatientsService from '../services/patientsService';
import React from 'react';
                                                                                                            // import Request from 'superagent';
import SearchBar from '../components/searchBar';
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
            <Panel header={<span><Glyphicon glyph="list" />{' Patients'}</span>}>
                <CreatePatient onHide={this.refreshList} />
                <SearchBar onChange={this.searchExpressionChanged} placeholder="Search patient" searchExpression={this.state.searchExpression}/>
                <PatientsList onChange={this.refreshList} patients={this.state.filteredPatients}/>
            </Panel>
		);
    }
});

export default Patients;
