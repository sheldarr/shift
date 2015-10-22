'use strict'

var _ = require('lodash');
var React = require('react');
var Request = require('superagent');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input
var Panel = require('react-bootstrap').Panel;

var MenuService = require('../services/menuService');
var PatientService = require('../services/patientsService');

var IndexCalculator = require('../logic/indexCalculator');

module.exports = React.createClass({
	getInitialState() {
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
    	  		startDate: 0,
    	  	}
	    };
	},
	componentDidMount() {
	    this.refreshMenu();
  	},
    refreshMenu() {
    	PatientService.getById(this.props.params.patientId)
			.then(response => {
				this.setState({
		   			patient: response,
		   		});
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
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
				<Panel header="Settings">
				</Panel>
			</Panel>
		);
	}
})