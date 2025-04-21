import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from './dto/jwt-payload.dto';

export const AuthGuard: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: 'No token provided' });
    return;                // <- return void
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    (req as any).user = decoded;
    next();                 // <- lanjut ke controller
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
    return;                // <- return void
  }
};
