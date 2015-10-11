'use strict'

var React = require('react');


var NavigationBar = require('./navigationBar');

var FilterableProductsList = require('./filterableProductsList');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        activeModule: <FilterableProductsList />  
	    };
	},
	moduleChanged(module) {
		this.setState({
			activeModule: module
		});
	},
    render() {
        return (
        	<div>
	        	<NavigationBar onChange={this.moduleChanged}/>
	        	<div className="row col-md-8 col-md-offset-2" style={{marginTop: 100}}>
        			{this.state.activeModule}
	        	</div>
        	</div>
    	)
    }
});