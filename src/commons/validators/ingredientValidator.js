const productsRepository = require('../../backend/repositories/productsRepository');
const unitValidator = require('./unitValidator');

const ingredientValidator = {
    validate: (ingredient) => {
        const amountIsValid = !isNaN(parseFloat(ingredient.amount));
        const productExists = productsRepository.getById(ingredient.productId);
        const unitIsValid = unitValidator.validate(ingredient.unit);

        console.log(amountIsValid, productExists, unitIsValid);
        return amountIsValid && productExists && unitIsValid;
    }
};

module.exports = ingredientValidator;