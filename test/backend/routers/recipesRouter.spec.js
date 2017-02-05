const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const initializer = require('../../../utils/initializer');

chai.use(chaiHttp);
chai.should();

describe('Recipes Router', () => {
    beforeEach((done) => {
        initializer.run(done);
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

        it('should GET recipe by id', (done) => {
            const recipeId = '76faf38a-5ecc-4887-b545-ebdb5060aaa0';

            chai.request(server).get(`/api/recipes/${recipeId}`).end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.id.should.equal(recipeId);

                response.body.should.have.property('ingredients');
                response.body.should.have.property('name');
                response.body.should.have.property('description');

                done();
            });
        });

        it('should DELETE existing recipe', (done) => {
            const recipeId = '76faf38a-5ecc-4887-b545-ebdb5060aaa0';

            chai.request(server).del(`/api/recipes/${recipeId}`).end((error, response) => {
                response.should.have.status(200);

                done();
            });
        });

        it('should not DELETE not existing recipe', (done) => {
            const recipeId = 'not-existing-recipe-id';

            chai.request(server).del(`/api/recipes/${recipeId}`).end((error, response) => {
                response.should.have.status(404);

                done();
            });
        });
    });
});