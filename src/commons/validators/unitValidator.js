const constants = require('../constants');

const unitValidator = {
    validate: (unit) => {
        return constants.units.kitchen.hasOwnProperty(unit)|| constants.units.si.hasOwnProperty(unit);
    }
};

module.exports = unitValidator;