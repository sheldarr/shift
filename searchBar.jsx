'use strict'

var React = require('react');
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;

var innerGlyphicon = <Glyphicon glyph="search" />;

module.exports = React.createClass({
	getInitialState() {
	    return {
      		searchExpression: ''
	    };
	},
	propTypes: {
	    onChange: React.PropTypes.func.isRequired
	},
	handleChange(event) {
		this.setState({
      		searchExpression: event.target.value
    	});
    	this.props.onChange(this.state.searchExpression);
	},
	render() {
		return (
			<Input type="text" 
				addonBefore={innerGlyphicon} 
				onChange={this.handleChange}
				placeholder="Search product" />
		)
	}
})