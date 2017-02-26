const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const initializer = require('../../../utils/initializer');

chai.use(chaiHttp);
chai.should();

describe('Patients Router', () => {
    beforeEach((done) => {
        initializer.run(done);
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

    describe('POST /patient', () => {
        it('should POST valid patient', (done) => {
            const patient = {
                name: 'Mario',
                surname: 'Marian',
                dateOfBirth: '1970-01-01',
                telephone: '123 456 789',
                email: 'mario@dot.net',
                sex: 'male',
            };

            chai.request(server).post('/api/patient').send(patient).end((error, response) => {
                response.should.have.status(201);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('name').equal(patient.name);
                response.body.should.have.property('surname').equal(patient.surname);
                response.body.should.have.property('dateOfBirth').equal(patient.dateOfBirth);
                response.body.should.have.property('telephone').equal(patient.telephone);
                response.body.should.have.property('email').deep.equal(patient.email);
                response.body.should.have.property('sex').deep.equal(patient.sex);

                done();
            });
        });

        it('should not POST invalid patient', (done) => {
            const patient = {
                name: '',
                surname: '',
                dateOfBirth: '',
                telephone: '',
                email: '',
                sex: '',
            };

            chai.request(server).post('/api/patient').send(patient).end((error, response) => {
                response.should.have.status(400);
                response.should.be.json;
                response.body.should.be.a('array');
                response.body.should.have.members([
                    'name',
                    'surname',
                    'dateOfBirth',
                    'telephone',
                    'email',
                    'sex'
                ]);

                done();
            });
        });
    });

    describe('DELETE /patient', () => {
        it('should DELETE existing patient', (done) => {
            const patientId = '41e9f68d-67cc-4dca-85bf-ad7da7994f1f';

            chai.request(server).del(`/api/patient/${patientId}`).end((error, response) => {
                response.should.have.status(200);

                done();
            });
        });

        it('should not DELETE not existing patient', (done) => {
            const patientId = 'not-existing-patient-id';

            chai.request(server).del(`/api/patient/${patientId}`).end((error, response) => {
                response.should.have.status(404);

                done();
            });
        });
    });
});