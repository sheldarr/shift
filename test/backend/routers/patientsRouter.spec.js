const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const initializer = require('../../../utils/initializer');

chai.use(chaiHttp);
chai.should();

describe('Patients Router', () => {
    beforeEach(() => {
        initializer.run();
    });

    describe('GET /patient', () => {
        it('should GET all patients', (done) => {
            chai.request(server).get('/api/patient').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.be.a('array');
                response.body.should.not.equal([]);

                done();
            });
        });

        it('should GET patient by id', (done) => {
            const patientId = '41e9f68d-67cc-4dca-85bf-ad7da7994f1f';

            chai.request(server).get(`/api/patient/${patientId}`).end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.id.should.equal(patientId);

                response.body.should.have.property('name');
                response.body.should.have.property('surname');
                response.body.should.have.property('dateOfBirth');
                response.body.should.have.property('telephone');
                response.body.should.have.property('email');
                response.body.should.have.property('sex');
                response.body.should.have.property('measurements');
                response.body.should.have.property('menus');

                done();
            });
        });

        it('should not GET not existing patient', (done) => {
            const patientId = 'not-existing-patient-id';

            chai.request(server).get(`/api/patient/${patientId}`).end((error, response) => {
                response.should.have.status(404);

                done();
            });
        });
    });
});