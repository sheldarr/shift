const productsRepository = require('../../backend/repositories/productsRepository');
const unitValidator = require('./unitValidator');

const ingredientValidator = {
    validate: (ingredient) => {
        const validationErrors = [];
        
        if(isNaN(parseFloat(ingredient.amount))) {
            validationErrors.push('amount');
        }

        if(!productsRepository.getById(ingredient.productId)) {
            validationErrors.push('productId');
        }

        if(!unitValidator.validate(ingredient.unit)) {
            validationErrors.push('unit');
        }

        return validationErrors;
    }
};

module.exports = ingredientValidator;