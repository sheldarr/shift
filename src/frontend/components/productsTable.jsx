'use string';

import React from 'react';
import {Table} from 'reactable';

const ProductsTable = React.createClass({
    propTypes: {
        filterBy: React.PropTypes.string.isRequired,
        products: React.PropTypes.array.isRequired
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
                key: 'energyValue',
                label: 'Energy Value [kcal]'
            },
            {
                key: 'protein',
                label: 'Protein [g]'
            },
            {
                key: 'fat',
                label: 'Fat [g]'
            },
            {
                key: 'carbohydrates',
                label: 'Carbohydrates [g]'
            },
            {
                key: 'fiber',
                label: 'Fiber [g]'
            }
        ];

        return (
            <div className="table-responsive">
                <Table className="table table-condensed  table-hover table-striped" columns={columns} currentPage={1}
                    data={this.props.products} defaultSort={{column: 'name', direction: 'asc'}} filterBy={this.props.filterBy}
                    filterable={['id', 'name']} hideFilterInput itemsPerPage={16}
                    noDataText="No records." pageButtonLimit={10} sortable
                />
            </div>
        );
    }
});

export default ProductsTable;

