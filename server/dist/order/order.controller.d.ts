import { OrderService } from './order.service';
import { ORDER } from './order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<ORDER[]>;
    findOne(id: number): Promise<ORDER>;
    create(orderData: Partial<ORDER>): Promise<ORDER>;
    update(id: number, orderData: Partial<ORDER>): Promise<ORDER>;
    remove(id: number): Promise<void>;
}
