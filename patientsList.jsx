'use string'

var React = require('react');
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

module.exports = React.createClass({
	propTypes: {
		patients: React.PropTypes.array.isRequired
	},
	render() {
		return (
			<Table>
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Age</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{this.props.patients.map(patient => 
						<tr key={patient.id}>
							<td>
								{patient.id}
							</td>
							<td>
								{patient.name}
							</td>
							<td>
								{patient.age}
							</td>
							<td>
								<div className="pull-right">
									 <Button bsStyle="primary" style={{marginRight: 10}}>
									 	<Glyphicon glyph="option-horizontal" /> Details
								 	</Button>
								 	 <Button bsStyle="danger">
									 	<Glyphicon glyph="remove" /> Remove
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