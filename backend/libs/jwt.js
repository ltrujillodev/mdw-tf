// jwt.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'secretito';

export function createAccessToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}
