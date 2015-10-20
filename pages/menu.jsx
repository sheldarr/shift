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
var MealDetails = require('../components/mealDetails');

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
    	  		meals: []
    	  	}
	    };
	},
	calculateCpr() {
		return (IndexCalculator.calculateCpr(this.state.patient.weight,
			this.state.patient.height, this.state.patient.age, 
			this.state.patient.sex, this.state.patient.factor)).toFixed(2);
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
					<Input type="number" label="CPR" addonAfter="kcal / day" readOnly value={this.calculateCpr()} />
				</Panel>
				{this.state.menu.meals.map(meal => <MealDetails meal={meal} key={meal.id} />)}
				<Button bsStyle="success" block>
					<Glyphicon glyph="plus" /> Add meal
				</Button>
			</Panel>
		);
	}
})