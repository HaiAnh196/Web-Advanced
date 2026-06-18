import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { DatabaseModule } from '../database/database.module';
import { orderProviders } from './order.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [...orderProviders, OrderService],
})
export class OrderModule {}
