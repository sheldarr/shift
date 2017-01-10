const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');

chai.use(chaiHttp);
chai.should();

describe('Patients Router', () => {
    describe('GET /patient', () => {
        it('should GET all patients', (done) => {
            chai.request(server).get('/api/patient').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.not.be.empty;

                done();
            });
        });
    });
});