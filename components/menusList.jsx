'use string'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Table = require('react-bootstrap').Table;

module.exports = React.createClass({
	propTypes: {
		menus: React.PropTypes.array.isRequired,
		patientId: React.PropTypes.number.isRequired
	},
	render() {
		return (
			<Table striped hover>
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Days</td>
						<td>Start date</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{this.props.menus.map(menu => 
						<tr key={menu.id}>
							<td>
								{menu.id}
							</td>
							<td>
								{menu.name}
							</td>
							<td>
								{menu.days}
							</td>
							<td>
								{new Date(menu.startDate).toDateString()}
							</td>
							<td>
								<div className="pull-right">
									 <Button bsStyle="primary" style={{marginRight: 10}} 
									 	href={`#/patient/${this.props.patientId}/menu/${menu.id}`}>
									 	<Glyphicon glyph="pencil" /> Edit
								 	</Button>
							 	</div>
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		);
	}
});