import { decodeToken } from '../services/auth';

export default async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
  } catch (error) {
    throw error;
  }
  next();
}



