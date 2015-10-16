'use string'

var React = require('react');

var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Table = require('react-bootstrap').Table;

var PatientsService = require('../services/patientsService');

module.exports = React.createClass({
	propTypes: {
		patients: React.PropTypes.array.isRequired,
		onChange: React.PropTypes.func.isRequired
	},
	removePatient(id) {
		PatientsService.delete(id)
			.then(response => {
				this.props.onChange();
			})
			.catch(error => { 
				alert('Api error ' + error)
			});
	},
	render() {
		return (
			<Table striped hover>
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Weight [kg]</td>
						<td>Height [cm]</td>
						<td>Age [years]</td>
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
								{patient.weight}
							</td>
							<td>
								{patient.height}
							</td>
							<td>
								{patient.age}
							</td>
							<td>
								<div className="pull-right">
									 <Button bsStyle="primary" style={{marginRight: 10}} href={`#/patient/${patient.id}`}>
									 	<Glyphicon glyph="option-horizontal" /> Details
								 	</Button>
								 	 <Button bsStyle="danger" onClick={this.removePatient.bind(null, patient.id)}>
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