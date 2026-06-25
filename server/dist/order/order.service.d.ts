import { Repository } from 'typeorm';
import { ORDER } from './order.entity';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<ORDER>);
    findAll(): Promise<ORDER[]>;
    findOne(id: number): Promise<ORDER>;
    create(orderData: Partial<ORDER>): Promise<ORDER>;
    update(id: number, orderData: Partial<ORDER>): Promise<ORDER>;
    remove(id: number): Promise<void>;
}
