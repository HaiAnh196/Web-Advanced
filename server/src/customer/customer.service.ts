import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CUSTOMER } from './customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<CUSTOMER>,
  ) {}

  async findAll(): Promise<CUSTOMER[]> {
    return this.customerRepository.find();
  }

  async findOne(id: string): Promise<CUSTOMER> {
    const customer = await this.customerRepository.findOneBy({ CustomerId: id });
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<CUSTOMER> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<CUSTOMER> {
    const customer = await this.findOne(id);
    Object.assign(customer, updateCustomerDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.customerRepository.delete({ CustomerId: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return { deleted: true };
  }
}
