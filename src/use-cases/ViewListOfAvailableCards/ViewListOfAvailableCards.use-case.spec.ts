import { ProductCategory } from '@/products/entities/ProductCategory';

import { createFixture } from './ViewListOfAvailableCards.use-case.test-fixture';

/**
 * As a customer I can view a list of available cards so that I can celebrate my new job
 */
describe('Use Case: view a list of available cards', () => {
  let fixture: ReturnType<typeof createFixture>;

  beforeEach(() => {
    fixture = createFixture();
  });

  it('should displayed the cards from the list of available products', async () => {
    fixture.givenAvailableProductsAre([
      {
        number: '1',
        title: 'Card 1',
        category: ProductCategory.GreetingCards,
        image: 'https://moonpig.github.io/1.jpg',
      },
      {
        number: '2',
        title: 'Card 2',
        category: ProductCategory.GreetingCards,
        image: 'https://moonpig.github.io/2.jpg',
      },
      {
        number: '3',
        title: 'T-Shirt 3',
        category: ProductCategory.TShirts,
        image: 'https://moonpig.github.io/3.jpg',
      },
    ]);
    await fixture.whenTheCardsAreDisplayed();
    fixture.thenTheDiplayedCardsAre([
      {
        number: '1',
        title: 'Card 1',
        category: ProductCategory.GreetingCards,
        image: 'https://moonpig.github.io/1.jpg',
      },
      {
        number: '2',
        title: 'Card 2',
        category: ProductCategory.GreetingCards,
        image: 'https://moonpig.github.io/2.jpg',
      },
    ]);
  });
});
