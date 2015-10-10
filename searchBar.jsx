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
	handleChange: function() {
		this.setState({
      		searchExpression: 'abs'
    	});
	},
	render: function() {
		return (
			<div>
			{this.state.searchExpression}
			<Input type="text" 
				addonBefore={innerGlyphicon} 
				placeholder="Search product"
				onChange={this.handleChange}/>
			</div>
		)
	}
})