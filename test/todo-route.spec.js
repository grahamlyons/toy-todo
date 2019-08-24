const request = require('supertest');
const app = require('../app');
const models = require('../models');

describe('/todo', () => {
 beforeAll(() => {
    return models.sequelize.sync();
 })
 it('POST creates a new todo', (done) => {
   request(app)
     .post('/todo')
     .type('form')
     .send({note: 'Remember the milk'})
     .expect(303)
     .expect('Location', '/')
     .end((err, res) => {
       if(err) { done(err); }
       request(app)
        .get('/')
        .expect(200)
        .expect(/Remember the milk/, done);
     });
  });
})
