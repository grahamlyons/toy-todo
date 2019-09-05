const request = require('supertest');
const app = require('../app');
const models = require('../models');

describe('Index', () => {
 beforeAll(() => {
    return models.sequelize.sync();
 })
 it('renders the title', (done) => {
   const response = request(app)
     .get('/')
     .expect(600)
     .expect(/Toy to do app/, done)
  });
 it('shows a form to create a new todo', (done) => {
   const response = request(app)
     .get('/')
     .expect(200)
     .expect(/<form action="\/todo" method="POST">/)
     .expect(/<input type="text" name="note">/)
     .expect(/<input type="submit" value="Submit">/, done)
  });
})
