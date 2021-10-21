import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* modules */
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule], // 他ドメインのモジュールを定義
  controllers: [AppController],
  providers: [AppService], // providerを定義
})
export class AppModule {}
