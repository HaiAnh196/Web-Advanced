import { DataSource } from 'typeorm';
import { ORDER } from './order.entity';

export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ORDER),
    inject: ['DATA_SOURCE'],
  },
];
