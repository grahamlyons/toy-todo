const request = require('supertest');
const app = require('../app');

describe('Index', () => {
 it('renders a hello world', (done) => {
   const response = request(app)
     .get('/')
     .expect(200)
     .end((err, res) => {
        if(err) {
          return done(err);
        }
        expect(res.text).toContain('Hello, World');
        done();
     });
  });
})
