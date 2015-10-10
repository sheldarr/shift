'use strict'

var React = require('react');
var Input = require('react-bootstrap').Input;
var Glyphicon = require('react-bootstrap').Glyphicon;

var innerGlyphicon = <Glyphicon glyph="search" />;

module.exports = React.createClass({
	displayName: 'searchBar',
	render: function() {
		return (
			<Input type="text" addonBefore={innerGlyphicon}  placeholder="Search product"/>
		)
	}
})