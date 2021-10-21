import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Middlewareを使用するには、関数かInjectable　デコレーターを持つクラスのいずれかを使用する
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

// 関数でも定義できる
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
