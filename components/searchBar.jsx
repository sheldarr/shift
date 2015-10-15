'use strict'

var React = require('react');

var Glyphicon = require('react-bootstrap').Glyphicon;
var Input = require('react-bootstrap').Input;

var innerGlyphicon = <Glyphicon glyph="search" />;

module.exports = React.createClass({
	propTypes: {
	    onChange: React.PropTypes.func.isRequired,
	    placeholder: React.PropTypes.string.isRequired
	},
	handleChange(event) {
    	this.props.onChange(event.target.value);
	},
	render() {
		return (
			<Input type="text" 
				addonBefore={innerGlyphicon}
				onChange={this.handleChange}
				placeholder={this.props.placeholder} />
		)
	}
})