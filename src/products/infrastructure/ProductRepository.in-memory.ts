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

  fetchProductByNumber(productNumber: Product['number']) {
    const product = this.products.find(
      ({ number }) => number === productNumber,
    );

    return Promise.resolve(product);
  }

  initAvailableProducts(products: Product[]) {
    this.products = products;
  }
}
