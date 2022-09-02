import { Module } from '@nestjs/common';
import { StaticsController } from './statics.controller';
import { StaticsService } from './statics.service';

@Module({
  controllers: [StaticsController],
  providers: [StaticsService]
})
export class StaticsModule {}
