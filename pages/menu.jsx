'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;

var MenuService = require('../services/menuService');

module.exports = React.createClass({
	getInitialState() {
	    return {
    	  	menu: {
    	  		id: 0,
    	  		name: '',
    	  		days: 0,
    	  		startDate: 0
    	  	}
	    };
	},
	componentDidMount() {
	    this.refreshMenu();
  	},
    refreshMenu() {
    	MenuService.getById(this.props.params.patientId, this.props.params.menuId)
			.then(response => {
				this.setState({
		   			menu: response,
		   		});
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
    },
	render() {
		return(
			<Panel header={<span><Glyphicon glyph="list" /> {this.state.menu.name}</span>}>
				Details
			</Panel>
		);
	}
})