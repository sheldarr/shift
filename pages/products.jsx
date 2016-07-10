'use strict';

import {Glyphicon, Panel} from 'react-bootstrap';

import CreateProduct from '../components/product/create.jsx';
import ProductsList from '../components/productsList.jsx';
import ProductsService from '../src/frontend/services/productsService';
import React from 'react';
import SearchBar from '../components/searchBar.jsx';
import _ from 'lodash';

const Products = React.createClass({
    getInitialState () {
        return {searchExpression: '', products: [], filteredProducts: []};
    },

    componentDidMount () {
        this.refreshList();
    },

    searchExpressionChanged (searchExpression) {
        this.setState({searchExpression});

        this.refreshFilter();
    },

    refreshList () {
        ProductsService.getAll().then((products) => {
            this.setState({products, filteredProducts: products});
        }).catch((error) => {
            alert(`Api error ${error}`);
        });
    },

    refreshFilter () {
        this.setState({
            filteredProducts: _.filter(this.state.products, (product) => product.name.toLowerCase().indexOf(this.state.searchExpression.toLowerCase()) > -1)
        });
    },

    render () {
        return (
            <Panel header={<span><Glyphicon glyph="list"/>{' Products'}</span>}>
                <CreateProduct onHide={this.refreshList}/>
                <SearchBar onChange={this.searchExpressionChanged} placeholder="Search product" searchExpression={this.state.searchExpression}/>
                <ProductsList products={this.state.filteredProducts}/>
            </Panel>
        );
    }
});

export default Products;
