require('dotenv').config();

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

  it('should return current user with valid token', async () => {
    const login = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com' });

    const token = login.body.token;

    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe('test@example.com');
  });
});
