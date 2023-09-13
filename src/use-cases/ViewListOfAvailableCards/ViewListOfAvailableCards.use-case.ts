import { ProductRepository } from '@/products/ProductRepository';
import { ProductCategory } from '@/products/entities/ProductCategory';

export class ViewListOfAvailableCardsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle() {
    return this.productRepository.searchProductsByCategory({
      categories: [ProductCategory.GreetingCards],
    });
  }
}
