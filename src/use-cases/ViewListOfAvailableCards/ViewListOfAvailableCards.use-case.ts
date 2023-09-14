import { ProductRepository } from '@/products/ProductRepository';
import { Product } from '@/products/entities/Product';
import { ProductCategory } from '@/products/entities/ProductCategory';

type ViewListOfAvailableCardsUseCaseResult = Product[];

export class ViewListOfAvailableCardsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle(): Promise<ViewListOfAvailableCardsUseCaseResult> {
    return this.productRepository.searchProductsByCategory({
      categories: [ProductCategory.GreetingCards],
    });
  }
}
