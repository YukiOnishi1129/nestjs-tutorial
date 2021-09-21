import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Nestアプリのインスタンス生成
  // .createの引数にルートモジュールを指定
  const app = await NestFactory.create(AppModule);
  // port:3000で起動
  await app.listen(3000);
}
bootstrap();
