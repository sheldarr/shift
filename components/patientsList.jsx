'use string'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Table = require('react-bootstrap').Table;

var RemovePatient = require('./removePatient');

module.exports = React.createClass({
	propTypes: {
		patients: React.PropTypes.array.isRequired,
		onChange: React.PropTypes.func.isRequired
	},
	render() {
		return (
			<Table striped hover>
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Surname</td>
						<td>Date of birth</td>
						<td>Telephone</td>
						<td>Email</td>
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
								{patient.surname}
							</td>
							<td>
								{patient.dateOfBirth}
							</td>
							<td>
								{patient.telephone}
							</td>
							<td>
								{patient.email}
							</td>
							<td>
								<div className="pull-right">
									 <Button bsStyle="primary" style={{marginRight: 10}} href={`#/patient/${patient.id}`}>
									 	<Glyphicon glyph="option-horizontal" /> Details
								 	</Button>
								 	<RemovePatient onRemove={this.props.onChange} patient={patient}/>
							 	</div>
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		);
	}
});