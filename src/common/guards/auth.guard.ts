import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

const API_KEY = 'secret';

function validateRequest(request: Request): boolean {
  // requestのheaderにあるトークンが同じものかを判定
  return request.header('Authorization') === API_KEY;
}

// 認証されたユーザーを想定する
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

// Guardはメソッドレベル、コントローラーレベル、グローバルなレベルで使用できる
