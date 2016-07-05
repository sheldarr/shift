'use string';

import React from 'react';
import {Table} from 'react-bootstrap';

module.exports = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render () {
        return (
            <Table hover striped>
                <thead>
                    <tr>
                        <td>{'Name'}</td>
                        <td>{'Energy Value [kcal]'}</td>
                        <td>{'Protein [g]'}</td>
                        <td>{'Fat [g]'}</td>
                        <td>{'Carbohydrates [g]'}</td>
                        <td>{'Fiber [g]'}</td>
                        <td>{'Sodium [mg]'}</td>
                        <td>{'Potasium [mg]'}</td>
                        <td>{'Calcium [mg]'}</td>
                        <td>{'Phosphorus [mg]'}</td>
                        <td>{'Iron [mg]'}</td>
                        <td>{'Magnesium [mg]'}</td>
                        <td>{'Vitamin A [μg]'}</td>
                        <td>{'Beta Carotene [μg]'}</td>
                        <td>{'Vitamin E [mg]'}</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product) => <tr key={product.id}>
                        <td>
                            {product.name}
                        </td>
                        <td>
                            {product.energyValue}
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
                            {product.fiber}
                        </td>
                        <td>
                            {product.sodium}
                        </td>
                        <td>
                            {product.potassium}
                        </td>
                        <td>
                            {product.calcium}
                        </td>
                        <td>
                            {product.phosphorus}
                        </td>
                        <td>
                            {product.iron}
                        </td>
                        <td>
                            {product.magnesium}
                        </td>
                        <td>
                            {product.vitaminA}
                        </td>
                        <td>
                            {product.betaCarotene}
                        </td>
                        <td>
                            {product.vitaminE}
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        );
    }
});
