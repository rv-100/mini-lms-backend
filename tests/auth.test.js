const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  it('should return JWT token on login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com' });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
