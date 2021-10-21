import { Module } from '@nestjs/common';
/* controller */
import { CatController } from './cat.controller';
/* service */
import { CatService } from './cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
