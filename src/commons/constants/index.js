'use strict';

const constants = {
    sex: {
        male: 'male',
        female: 'female'
    },
    units: {
        kitchen: {
            'pitch': {
                base: 'g',
                modifier: 0.25
            },
            'teaspoon': {
                base: 'ml',
                modifier: 5
            },
            'spoon': {
                base: 'ml',
                modifier: 15
            },
            'glass': {
                base: 'ml',
                modifier: 250
            }
        },
        si: {
            'g': {
                modifier: 1
            },
            'mg': {
                base: 'g',
                modifier: 0.001
            },
            'dag': {
                base: 'g',
                modifier: 0.01
            },
            'kg': {
                base: 'g',
                modifier: 1
            },
            'l': {
                modifier: 1
            },
            'ml': {
                base: 'l',
                modifier: 0.001
            }
        }
    }
};

export default constants;