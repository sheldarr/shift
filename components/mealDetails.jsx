'use string'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;	
var Table = require('react-bootstrap').Table;

module.exports = React.createClass({
	propTypes: {
		meal: React.PropTypes.object.isRequired,
	},
	render() {
		return (
			<Panel header={this.props.meal.name} >
				<Input type="number" label="Calories" addonAfter="kcal / 0.5%" />
			</ Panel>
		);
	}
});