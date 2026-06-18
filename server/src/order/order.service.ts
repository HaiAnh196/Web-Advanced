import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ORDER } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<ORDER>,
  ) {}

  async findAll(): Promise<ORDER[]> {
    return this.orderRepository.find();
  }

  async findOne(id: number): Promise<ORDER> {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  async create(orderData: Partial<ORDER>): Promise<ORDER> {
    const newOrder = this.orderRepository.create(orderData);
    return this.orderRepository.save(newOrder);
  }

  async update(id: number, orderData: Partial<ORDER>): Promise<ORDER> {
    const order = await this.findOne(id);
    this.orderRepository.merge(order, orderData);
    return this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
  }
}
