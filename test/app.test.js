const app = require('../app')
const server = app.listen()
const request = require('supertest')

describe('GET /', function() {
   it('respond with welcome message', function(done) {
      request(server)
      .get('/')
      .expect(200)
      .expect('Welcome to Toddle App deployed by Jenkins!', done)
    })
})