'use string'

var React = require('react');
var Table = require('react-bootstrap').Table;

module.exports = React.createClass({
	propTypes: {
		products: React.PropTypes.array.isRequired
	},
	render() {
		return (
			<Table>
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
					</tr>
				</thead>
				<tbody>
					{this.props.products.map(product => 
						<tr key={product.id}>
							<td>
								{product.id}
							</td>
							<td>
								{product.name}
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		) 
	}
});