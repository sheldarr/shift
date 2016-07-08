'use strict';

import constants from '../constants';

const indexCalculator = {
    calculateBmi (weight, height) {
        return weight / Math.pow(height / 100, 2);
    },

    calculateBmr (weight, height, age, sex) {
        if (sex == constants.sex.male) {
            return 66.4730 + ((13.7516 * weight) +
                (5.0033 * height) -
                (6.7550 * age));
        }

        return 655.0955 + ((9.5634 * weight) +
            (1.8496 * height) -
            (4.6756 * age));
    },

    calculateTmr (weight, height, age, sex, physicalActivityRate) {
        return this.calculateBmr(weight, height, age, sex, physicalActivityRate) * physicalActivityRate;
    },

    calculateWhr (waistCircumference, hipCircumference) {
        return waistCircumference / hipCircumference;
    },

    getObesityType (waistCircumference, hipCircumference, sex) {
        const whr = this.calculateWhr(waistCircumference, hipCircumference);

        if (sex == constants.sex.male) {
            return whr >= 1 ? 'Apple' : 'Pineapple';
        }

        return whr >= 0.8 ? 'Apple' : 'Pineapple';
    }
};

export default indexCalculator;
