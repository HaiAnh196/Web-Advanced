import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<import("./customer.entity").CUSTOMER[]>;
    findOne(id: string): Promise<import("./customer.entity").CUSTOMER>;
    create(createCustomerDto: CreateCustomerDto): Promise<import("./customer.entity").CUSTOMER>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<import("./customer.entity").CUSTOMER>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
