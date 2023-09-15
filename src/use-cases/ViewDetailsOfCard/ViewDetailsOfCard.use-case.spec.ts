import { ProductCategory } from '@/products/entities/ProductCategory';

import { createFixture } from './ViewDetailsOfCard.use-case.test-fixture';

/**
 * As a customer I can view more details of a card so that I can decide it's the right card for me before purchase
 */
describe('Use Case: view details of a card', () => {
  let fixture: ReturnType<typeof createFixture>;

  beforeEach(() => {
    fixture = createFixture();
  });

  it('should display the details of a card if it exists', async () => {
    fixture.givenAvailableProductsAre([
      {
        number: '1',
        title: 'Card 1',
        category: ProductCategory.GreetingCards,
        images: ['https://moonpig.github.io/1.jpg'],
      },
      {
        number: '2',
        title: 'Card 2',
        category: ProductCategory.GreetingCards,
        images: ['https://moonpig.github.io/2.jpg'],
      },
      {
        number: '3',
        title: 'T-Shirt 3',
        category: ProductCategory.TShirts,
        images: ['https://moonpig.github.io/3.jpg'],
      },
    ]);
    await fixture.whenUserSelectsCard('1');
    fixture.thenTheDiplayedCardDetailsAre({
      number: '1',
      title: 'Card 1',
      category: ProductCategory.GreetingCards,
      images: ['https://moonpig.github.io/1.jpg'],
    });
    fixture.thenTheDisplayedErrorMessageIs(undefined);
  });

  it(`should display the error message "Apologies, but we don't propose the card with number <card number>"`, async () => {
    fixture.givenAvailableProductsAre([]);
    await fixture.whenUserSelectsCard('1');
    fixture.thenTheDisplayedErrorMessageIs(
      `Apologies, but we don't propose the card with number 1. It's possible that there might be an issue with the link you copied. Please ensure you've copied the correct card number and try again.`,
    );
    fixture.thenTheDiplayedCardDetailsAre(undefined);
  });
});
