'use strict';

const constants = {
    sex: {
        male: 'male',
        female: 'female'
    },
    units: {
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