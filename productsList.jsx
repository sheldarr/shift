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
						<td>Caloric value [kcal]</td>
						<td>Protein [g]</td>
						<td>Fat [g]</td>
						<td>Carbohydrates [g]</td>
						<td>Roughage [g]</td>
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
							<td>
								{product.calorie}
							</td>
							<td>
								{product.protein}
							</td>
							<td>
								{product.fat}
							</td>
							<td>
								{product.carbohydrates}
							</td>
							<td>
								{product.roughage}
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		) 
	}
});