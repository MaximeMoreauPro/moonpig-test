import { ProductRepository } from '../ProductRepository';
import { Product } from '../entities/Product';
import { ProductCategory } from '../entities/ProductCategory';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  searchProductsByCategory(criterias: {
    categories: ProductCategory[];
  }): Promise<Product[]> {
    const filteredProducts = this.products.filter(({ category }) =>
      criterias.categories.includes(category),
    );

    return Promise.resolve(filteredProducts);
  }

  initAvailableProducts(products: Product[]) {
    this.products = products;
  }
}
