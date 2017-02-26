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
    });

    describe('DELETE /recipes', () => {
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

    describe('POST /recipes', () => {
        it('should POST valid recipe', (done) => {
            const recipe = {
                name: 'recipeName',
                description: 'description',
                ingredients: [{
                    amount: 10,
                    productId: 1,
                    unit: 'g'
                }]
            };

            chai.request(server).post('/api/recipes').send(recipe).end((error, response) => {
                response.should.have.status(201);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('name').equal(recipe.name);
                response.body.should.have.property('description').equal(recipe.description);
                response.body.should.have.property('ingredients').deep.equal(recipe.ingredients);

                done();
            });
        });

        it('should not POST invalid recipe', (done) => {
            const recipe = {
                name: '',
                description: '',
                ingredients: [{}]
            };

            chai.request(server).post('/api/recipes').send(recipe).end((error, response) => {
                response.should.have.status(400);
                response.should.be.json;
                response.body.should.be.a('array');
                response.body.should.have.members([
                    'name',
                    'ingredients'
                ]);

                done();
            });
        });
    });
});