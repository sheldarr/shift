'use strict';

import CreatePatient from '../components/patient/create.jsx';
import {Panel} from 'react-bootstrap';
import PatientsService from '../src/frontend/services/patientsService';
import PatientsTable from '../src/frontend/components/patientsTable.jsx';
import React from 'react';
import SearchBar from '../components/searchBar.jsx';

const Patients = React.createClass({
    getInitialState () {
        return {searchExpression: '', patients: []};
    },

    componentDidMount () {
        this.refreshList();
    },

    searchExpressionChanged (searchExpression) {
        this.setState({searchExpression});
    },

    refreshList () {
        PatientsService.getAll().then((patients) => {
            this.setState({patients});
        });
    },

    render () {
        return (
            <Panel header={'Patients'}>
                <CreatePatient onHide={this.refreshList} />
                <SearchBar onChange={this.searchExpressionChanged} placeholder="Search patient" searchExpression={this.state.searchExpression}/>
                <PatientsTable filterBy={this.state.searchExpression} patients={this.state.patients}/>
            </Panel>
        );
    }
});

export default Patients;
