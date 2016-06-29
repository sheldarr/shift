'use strict'

var React = require('react');

var Panel = require('react-bootstrap').Panel;

module.exports = React.createClass({
	render() {
		return(
			<Panel header="404">
				Page not found :(
			</Panel>
		);
	}
})