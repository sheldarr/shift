const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');

chai.use(chaiHttp);
chai.should();

describe('Resources Router', () => {
    describe('GET /resources', () => {
        it('should GET resources for pages and commons', (done) => {
            chai.request(server).get('/api/resources').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('pages');
                response.body.should.have.property('commons');

                done();
            });
        });
    });

    describe('GET /resources/:page', () => {
        it('should GET resources for specified page and commons', (done) => {
            chai.request(server).get('/api/resources/calculator').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.have.property('page');
                response.body.should.have.property('commons');

                done();
            });
        });
    });
});