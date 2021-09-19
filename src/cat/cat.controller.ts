import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cat')
export class CatController {
  // @Get(): getパラメータのメソッドに指定
  // Getのステータスコードは200
  // POSTは201
  // @HttpCode(...)でステータスコードを変更できる
  @Get()
  // メソッド名は任意
  // @Reqデコレータ経由でリクエストオブジェクトにアクセスできる
  // メソッドにデコレータを注入することで使用できる
  findAll(@Req() request: Request): string {
    console.log(request);
    // オブジェクトを返す場合、自動的にjsonにシリアライズされる
    // プリミティブ型(string, number, boolean)を返す場合は値だけを返す
    return 'This action returns all cats';
    // return [1, 2, 3];
  }

  // /cat/profileのルーティング
  @Get('profile')
  findProfile(): string {
    return 'This  action returns cats profile';
  }
}
