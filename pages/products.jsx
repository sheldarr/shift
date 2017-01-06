'use strict';

import {Panel} from 'react-bootstrap';

import CreateProduct from '../components/product/create.jsx';
import ProductsService from '../src/frontend/services/productsService';
import ProductsTable from '../src/frontend/components/productsTable.jsx';
import React from 'react';
import SearchBar from '../components/searchBar.jsx';

const Products = React.createClass({
    getInitialState () {
        return {searchExpression: '', products: []};
    },

    componentDidMount () {
        this.refreshList();
    },

    searchExpressionChanged (searchExpression) {
        this.setState({searchExpression});
    },

    refreshList () {
        ProductsService.getAll((error, response) => {
            this.setState({products: response.body});
        });
    },

    render () {
        return (
            <Panel header={'Products'}>
                <CreateProduct onHide={this.refreshList}/>
                <SearchBar onChange={this.searchExpressionChanged} placeholder="Search product" searchExpression={this.state.searchExpression}/>
                <ProductsTable filterBy={this.state.searchExpression} products={this.state.products}/>
            </Panel>
        );
    }
});

export default Products;
