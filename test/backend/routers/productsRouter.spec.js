const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const initializer = require('../../../utils/initializer');

chai.use(chaiHttp);
chai.should();

describe('Products Router', () => {
    beforeEach(() => {
        initializer.run();
    });

    describe('GET /product', () => {
        it('should GET all products', (done) => {
            chai.request(server).get('/api/product').end((error, response) => {
                response.should.have.status(200);
                response.should.be.json;
                response.body.should.not.equal([]);

                done();
            });
        });
    });

    describe('POST /product', () => {
        it('should POST valid product', (done) => {
            const product = {
                name: 'productName',
                energyValue: 1.5,
                protein: 2.5,
                fat: 3.5,
                carbohydrates: 4.5,
                fiber: 5.5,
                sodium: 6.5,
                potassium: 7.5,
                calcium: 8.5,
                phosphorus: 9.5,
                iron: 10.5,
                magnesium: 11.5,
                vitaminA: 12.5,
                betaCarotene: 13.5,
                vitaminE: 14.5,
                thiamine: 15.5,
                riboflavin: 16.5,
                niacin: 17.5,
                vitaminC: 18.5
            };

            chai.request(server).post('/api/product').send(product).end((error, response) => {
                response.should.have.status(201);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('energyValue').equal(product.energyValue);
                response.body.should.have.property('protein').equal(product.protein);
                response.body.should.have.property('fat').equal(product.fat);
                response.body.should.have.property('carbohydrates').equal(product.carbohydrates);
                response.body.should.have.property('fiber').equal(product.fiber);
                response.body.should.have.property('sodium').equal(product.sodium);
                response.body.should.have.property('potassium').equal(product.potassium);
                response.body.should.have.property('calcium').equal(product.calcium);
                response.body.should.have.property('phosphorus').equal(product.phosphorus);
                response.body.should.have.property('iron').equal(product.iron);
                response.body.should.have.property('magnesium').equal(product.magnesium);
                response.body.should.have.property('vitaminA').equal(product.vitaminA);
                response.body.should.have.property('betaCarotene').equal(product.betaCarotene);
                response.body.should.have.property('vitaminE').equal(product.vitaminE);
                response.body.should.have.property('thiamine').equal(product.thiamine);
                response.body.should.have.property('riboflavin').equal(product.riboflavin);
                response.body.should.have.property('niacin').equal(product.niacin);
                response.body.should.have.property('vitaminC').equal(product.vitaminC);

                done();
            });
        });

        it('should not POST invalid product', (done) => {
            const product = {
                energyValue: '',
                protein: 'string'
            };

            chai.request(server).post('/api/product').send(product).end((error, response) => {
                response.should.have.status(400);
                response.should.be.json;
                response.body.should.be.a('array');
                response.body.should.have.members([
                    'name',
                    'energyValue',
                    'protein',
                    'fat',
                    'carbohydrates',
                    'fiber',
                    'sodium',
                    'potassium',
                    'calcium',
                    'phosphorus',
                    'iron',
                    'magnesium',
                    'vitaminA',
                    'betaCarotene',
                    'vitaminE',
                    'thiamine',
                    'riboflavin',
                    'niacin',
                    'vitaminC'
                ]);

                done();
            });
        });
    });
});