const request = require('supertest');
const app = require('../src/config/express');

test('should ', async () => {
  await request(app).get('/example/').expect(200);
});
