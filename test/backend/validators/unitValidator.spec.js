const unitValidator = require('../../../src/commons/validators/unitValidator');

describe('unitValidator', () => {
    it('should successfully validate existing kitchen unit', () => {
        const result = unitValidator.validate('glass');
       
        result.should.equal(true);
    });

    it('should successfully validate existing si unit', () => {
        const result = unitValidator.validate('g');
       
        result.should.equal(true);
    });

     it('should not successfully validate not existing unit', () => {
        const result = unitValidator.validate('not-existing-unit');
       
        result.should.equal(false);
    });
});
