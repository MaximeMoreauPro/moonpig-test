import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

import { ProductRepositoryContext } from '@/app/contexts/ProductRepositoryContext';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';
import { ProductCategory } from '@/products/entities/ProductCategory';
import { Product } from '@/products/entities/Product';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { cardsRoutes } from '@/app/pages/cards/routes';

describe('CardDetails', () => {
  it('should display an error message if the card does not exist', async () => {
    renderCardDetails({ cardNumber: '1', products: [] });

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByTestId('error-message')).toHaveTextContent(
      "Apologies, but we don't propose the card with number 1. It's possible that there might be an issue with the link you copied. Please ensure you've copied the correct card number and try again.",
    );
  });

  it('should display the details of a card if it exists', async () => {
    renderCardDetails({
      cardNumber: '1',
      products: [
        {
          number: '1',
          title: 'Card 1',
          category: ProductCategory.GreetingCards,
          images: [
            'https://moonpig.github.io/1-page1.jpg',
            'https://moonpig.github.io/1-page2.jpg',
          ],
        },
      ],
    });

    await screen.findByText('Card 1');

    expect(await screen.findByTestId('current-image')).toHaveAttribute(
      'src',
      'https://moonpig.github.io/1-page1.jpg',
    );

    await user.click(await screen.findByTestId('next-image'));
    expect(await screen.findByTestId('current-image')).toHaveAttribute(
      'src',
      'https://moonpig.github.io/1-page2.jpg',
    );
  });
});

function renderCardDetails({
  cardNumber,
  products,
}: {
  cardNumber: Product['number'];
  products: Product[];
}) {
  const productRepository = new InMemoryProductRepository();
  productRepository.initAvailableProducts(products);

  // the cards scope router can also be tested thanks to the MemoryRouter
  const cardsRouter = createMemoryRouter(cardsRoutes, {
    initialEntries: [`/cards/${cardNumber}`],
  });

  return render(
    <ProductRepositoryContext.Provider value={productRepository}>
      <RouterProvider router={cardsRouter} />
    </ProductRepositoryContext.Provider>,
  );
}
