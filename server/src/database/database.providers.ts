import { Product } from '../products/product.entity';
import { CUSTOMER } from '../customer/customer.entity';
import { ORDER } from '../order/order.entity';
import { User } from '../auth/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '230706',
        database: 'ecommerce_db',
        entities: [Product, CUSTOMER, ORDER, User],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
