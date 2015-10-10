'use string'

var React = require('react');
var Table = require('elemental').Table;
var Button = require('elemental').Button;

require.context('./node_modules/elemental/less/', true, /\.less$/);

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			products: []
		}
	},
	propTypes: {
		products: React.PropTypes.array
	},
	displayName: 'ProductsList',
	render: function() {
		return (
			<Table>
				<thead>
					<tr>
						<td>Id</td>
						<td>Nazwa</td>
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
							<Button type="success">Success</Button>
						</tr>
					)}
				</tbody>
			</Table>
		) 
	}
});