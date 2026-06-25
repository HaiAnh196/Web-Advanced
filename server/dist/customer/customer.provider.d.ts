import { DataSource } from 'typeorm';
import { CUSTOMER } from './customer.entity';
export declare const customerProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CUSTOMER>;
    inject: string[];
}[];
