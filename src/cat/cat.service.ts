import { Injectable } from '@nestjs/common';
/* interface */
import { Cat } from './interfaces/cat.interface';

// データの保存と取得を担当
// CatControllerが使用するように設計されている
@Injectable() // [CatService]がIoCコンテナで管理できるクラスであることを宣言
// DIできるものとして定義？
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
