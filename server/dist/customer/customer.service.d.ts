import { Repository } from 'typeorm';
import { CUSTOMER } from './customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<CUSTOMER>);
    findAll(): Promise<CUSTOMER[]>;
    findOne(id: string): Promise<CUSTOMER>;
    create(createCustomerDto: CreateCustomerDto): Promise<CUSTOMER>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CUSTOMER>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
