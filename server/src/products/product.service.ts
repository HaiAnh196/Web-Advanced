import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product)
      throw new NotFoundException(`Không tìm thấy sản phẩm có id ${id}`);
    return product;
  }

  async update(id: number, updateData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, updateData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Không tìm thấy sản phẩm có id ${id}`);
  }
}
