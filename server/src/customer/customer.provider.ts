import { DataSource } from 'typeorm';
import { CUSTOMER } from './customer.entity';

export const customerProviders = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CUSTOMER),
    inject: ['DATA_SOURCE'],
  },
];
