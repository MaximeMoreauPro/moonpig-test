import { Product } from './entities/Product';
import { ProductCategory } from './entities/ProductCategory';

export interface ProductRepository {
  searchProductsByCategory(criterias: {
    categories: ProductCategory[];
  }): Promise<Product[]>;
}
