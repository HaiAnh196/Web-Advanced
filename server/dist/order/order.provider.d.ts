import { DataSource } from 'typeorm';
import { ORDER } from './order.entity';
export declare const orderProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ORDER>;
    inject: string[];
}[];
