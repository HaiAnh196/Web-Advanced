import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(productData: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateData: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
}
