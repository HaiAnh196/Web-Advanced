import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(productData: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateData: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
}
