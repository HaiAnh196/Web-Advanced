import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './products/product.module';
import { CustomerModule } from './customer/customer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, ProductModule, CustomerModule, OrderModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
