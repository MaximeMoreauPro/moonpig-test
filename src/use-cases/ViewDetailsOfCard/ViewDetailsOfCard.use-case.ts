import { ProductRepository } from '@/products/ProductRepository';
import { Product } from '@/products/entities/Product';

type ViewDetailsOfCardUseCaseQuery = {
  cardNumber: Product['number'];
};

type ViewDetailsOfCardUseCardResult =
  | {
      card: Product;
    }
  | {
      errorMessage: string;
    };

/**
 * As a customer I can view more details of a card so that I can decide it's the right card for me before purchase
 */
export class ViewDetailsOfCardUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle({
    cardNumber,
  }: ViewDetailsOfCardUseCaseQuery): Promise<ViewDetailsOfCardUseCardResult> {
    const card = await this.productRepository.fetchProductByNumber(cardNumber);

    return card
      ? { card }
      : {
          errorMessage: `Apologies, but we don't propose the card with number ${cardNumber}. It's possible that there might be an issue with the link you copied. Please ensure you've copied the correct card number and try again.`,
        };
  }
}
