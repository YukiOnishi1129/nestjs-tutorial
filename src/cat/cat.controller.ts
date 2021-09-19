import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
  // @Get(): getパラメータのメソッドに指定
  // Getのステータスコードは200
  // POSTは201
  // @HttpCode(...)でステータスコードを変更できる
  @Get()
  // メソッド名は任意
  findAll(): string {
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
