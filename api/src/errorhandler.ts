import { NextFunction, Request, Response } from 'express';
import { AppError } from './tratandoErro';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) { 
    res.status(err.statusCode || 500).json({ error: { message: err.message } });
  } else {
    console.error(err);
    res.status(500).json({ error: { message: 'Internal Server Error' } });
  }
}