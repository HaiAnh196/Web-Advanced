import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { topicsProviders } from './topics.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TopicsController],
  providers: [...topicsProviders, TopicsService],
})
export class TopicsModule {}
