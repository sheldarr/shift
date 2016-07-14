'use string';

import React from 'react';
import {Table} from 'reactable';

const PatientsTable = React.createClass({
    propTypes: {
        filterBy: React.PropTypes.string.isRequired,
        patients: React.PropTypes.array.isRequired
    },

    render () {
        const columns = [
            {
                key: 'id',
                label: 'Id'
            },
            {
                key: 'name',
                label: 'Name'
            },
            {
                key: 'surname',
                label: 'Surname'
            },
            {
                key: 'dateOfBirth',
                label: 'Date of birth'
            },
            {
                key: 'telephone',
                label: 'Telephone'
            },
            {
                key: 'email',
                label: 'Email'
            },
            {
                key: 'sex',
                label: 'Sex'
            }
        ];

        return (
            <div className="table-responsive">
                <Table className="table table-condensed table-hover table-striped" columns={columns} currentPage={1}
                    data={this.props.patients}
                    defaultSort={{column: 'name', direction: 'asc'}} filterBy={this.props.filterBy} filterable={['id', 'name']}
                    hideFilterInput itemsPerPage={16} noDataText="No records."
                    pageButtonLimit={10} sortable
                />
            </div>
        );
    }
});

export default PatientsTable;
