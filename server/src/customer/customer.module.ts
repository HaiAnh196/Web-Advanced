import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { DatabaseModule } from '../database/database.module';
import { customerProviders } from './customer.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [...customerProviders, CustomerService],
})
export class CustomerModule {}
