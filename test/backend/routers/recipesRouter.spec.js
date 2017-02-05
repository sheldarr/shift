const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const initializer = require('../../../utils/initializer');

chai.use(chaiHttp);
chai.should();

describe('Recipes Router', () => {
    beforeEach(() => {
        initializer.run();
    });

    describe('GET /recipes', () => {
        it('should GET all recipes', (done) => {
            chai.request(server).get('/api/recipes').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.be.a('array');
                response.body.should.not.equal([]);

                done();
            });
        });
    });
});