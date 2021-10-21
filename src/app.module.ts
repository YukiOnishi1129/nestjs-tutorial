import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
/* modules */
import { CatModule } from './cat/cat.module';
/* middleware */
import { LoggerMiddleware } from './common/middleware/logger.middleware';
/* controllers */
import { AppController } from './app.controller';
/* services */
import { AppService } from './app.service';

@Module({
  imports: [CatModule], // 他ドメインのモジュールを定義
  controllers: [AppController],
  providers: [AppService], // providerを定義
})
export class AppModule implements NestModule {
  // MiddlewareConsumer: ヘルパークラス ミドルウェアを管理するための組み込みメソッドを提供している
  configure(consumer: MiddlewareConsumer) {
    // catルートハンドラにLoggerMiddlewareを定義
    // forRoutesにルートパスやリクエストメソッドを含むオブジェクトを渡すことで、
    // ミドルウェアを特定のリクエストメソッドに制限できる

    // urlが/cat/~のルートのみミドルウェアを適用させる
    // consumer.apply(LoggerMiddleware).forRoutes('cat');

    // urlが/cat/~のルートでGETリクエストのみミドルウェアを適用させる
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cat', method: RequestMethod.GET });

    // exclude: 特定のルートに適用させないようにする
    consumer.apply(LoggerMiddleware).exclude(
      // { path: 'cat', method: RequestMethod.GET },
      { path: 'cat', method: RequestMethod.POST },
      'cat/(.*)',
    );
  }
}
