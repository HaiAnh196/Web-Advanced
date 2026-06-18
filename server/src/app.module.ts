import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsModule } from './topics/topics.module';
import { DatabaseModule } from './database/database.module';

import { StudentModule } from './student/student.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DatabaseModule, TopicsModule, StudentModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
