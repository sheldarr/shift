const ingredientValidator = require('../../../src/commons/validators/ingredientValidator');

describe('ingredientValidator', () => {
    it('should successfully validate proper ingredient', () => {
        const ingredient = {
            amount: 10,
            productId: 1,
            unit: 'g'
        };
        
        const result = ingredientValidator.validate(ingredient);
       
        result.should.deep.equal([]);
    });

    it('should not successfully validate invalid ingredient', () => {
        const ingredient = {
            amount: 'amount',
            productId: 'not-existing-id',
            unit: 'not-existing-unit'
        };
        
        const result = ingredientValidator.validate(ingredient);
       
        result.should.deep.equal(['amount', 'productId', 'unit']);
    });
});
