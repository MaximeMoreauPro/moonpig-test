import { Product } from '@/products/entities/Product';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';

import { ViewListOfAvailableCardsUseCase } from './ViewListOfAvailableCards.use-case';

/**
 * Create the test fixture for the use case 'view list of available cards'.
 * It uses the function builder pattern to create the fixture
 * and abstracts the implementation details (calculateBasketPrice and getAvailableQuantityDiscount functions etc.)
 * making the spec/test more readable with BDD style (given, when, then) focusing on code intent/business/why/what insteaf of how.
 * It's a good practice especially for big use cases with a lot of rules.
 */
export function createFixture() {
  const productRepository = new InMemoryProductRepository();
  const viewListOfAvailableCards = new ViewListOfAvailableCardsUseCase(
    productRepository,
  );
  let displayedCards: Product[] = [];
  return {
    givenAvailableProductsAre(products: Product[]) {
      productRepository.initAvailableProducts(products);
    },
    async whenTheCardsAreDisplayed() {
      displayedCards = await viewListOfAvailableCards.handle();
    },
    thenTheDiplayedCardsAre(expectedDisplayedCards: Product[]) {
      expect(displayedCards).toEqual(expectedDisplayedCards);
    },
  };
}
