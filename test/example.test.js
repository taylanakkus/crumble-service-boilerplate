const request = require('supertest');
const app = require('../src/server');

test('should ', async () => {
  await request(app).get('/example/').expect(200);
});
