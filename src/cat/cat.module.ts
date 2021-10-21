import { Module, Global } from '@nestjs/common';
/* controller */
import { CatController } from './cat.controller';
/* service */
import { CatService } from './cat.service';

// @Global()
// Globalを定義すると、どのモジュールからも利用できるようになる (モジュールをグローバル化する)
@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService], // CatServiceのインスタンスを複数のモジュールで共有する際の設定
  // これでCatModuleをimportしたモジュールはCatServiceにアクセスできるようになる
})
export class CatModule {}
