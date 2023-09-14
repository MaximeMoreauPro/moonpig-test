import { Product } from '@/products/entities/Product';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';

import { ViewDetailsOfCardUseCase } from './ViewDetailsOfCard.use-case';

/**
 * Create the test fixture for the use case 'view details of a card'.
 * It uses the function builder pattern to create the fixture
 * and abstracts the implementation details (ProductRepository and UseCase functions etc.)
 * making the spec/test more readable with BDD style (given, when, then) focusing on code intent/business/why/what insteaf of how.
 * It's a good practice especially for big use cases with a lot of rules.
 */
export function createFixture() {
  const productRepository = new InMemoryProductRepository();
  const viewDetailsOfCard = new ViewDetailsOfCardUseCase(productRepository);
  let displayedCard: Product | undefined;
  let displayedErrorMessage: string | undefined;

  return {
    givenAvailableProductsAre(products: Product[]) {
      productRepository.initAvailableProducts(products);
    },
    async whenUserSelectsCard(productNumber: Product['number']) {
      const result = await viewDetailsOfCard.handle({
        cardNumber: productNumber,
      });

      if ('card' in result) {
        displayedCard = result.card;
      } else {
        displayedErrorMessage = result.errorMessage;
      }
    },
    thenTheDiplayedCardDetailsAre(expectedDisplayedCard: Product | undefined) {
      expect(displayedCard).toEqual(expectedDisplayedCard);
    },
    thenTheDisplayedErrorMessageIs(
      expectedDisplayedErrorMessage: string | undefined,
    ) {
      expect(displayedErrorMessage).toEqual(expectedDisplayedErrorMessage);
    },
  };
}
