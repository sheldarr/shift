'use string'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Panel = require('react-bootstrap').Panel;	
var Table = require('react-bootstrap').Table;

module.exports = React.createClass({
	propTypes: {
		meals: React.PropTypes.array.isRequired
	},
	render() {
		return (
			<div>
				{this.props.meals.map(meal => 
					<Panel header={meal.name} >
					</ Panel>
				)}
			</div>
		);
	}
});