'use strict'

module.exports = {
	genders: {
		Man: "0",
		Woman: "1"
	},
	calculateBmi(weight, height) {
		return weight / Math.pow(height/100, 2);
	},
	calculateBmr(weight, height, age, gender) {	
		if(gender === this.genders.Man) {
			return 66.4730 + ((13.7516 * weight) + 
				(5.0033 * height) -
				(6.7550 * age));
		}

		return 655.0955 + ((9.5634 * weight) + 
			(1.8496 * height) - 
			(4.6756 * age));
	},
	calculateCpr(weight, height, age, gender, factor) {
		return this.calculateBmr(weight, height, age, gender, factor) * factor;
	},
	getBmiCategory(weight, height) {
		var bmi = this.calculateBmi(weight, height);

		if(bmi < 15) {
			return 'Very severely underweight';
		}
		if(bmi < 16) {
			return 'Severely underweight';
		}
		if(bmi < 18.5) {
			return 'Underweight';
		}
		if(bmi < 25) {
			return 'Normal (healthy weight)';
		}
		if(bmi < 30) {
			return 'Overweight';
		}
		if(bmi < 35) {
			return 'Obese Class I (Moderately obese)';
		}
		if(bmi < 40) {
			return 'Obese Class II (Severely obese)';
		}
		return 'Obese Class III (Very severely obese)';
	}
};