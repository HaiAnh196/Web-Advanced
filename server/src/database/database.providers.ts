import { Product } from '../products/product.entity';
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
        password: 'LeHaiAnh196@',
        database: 'ecommerce_db',
        entities: [Product],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
