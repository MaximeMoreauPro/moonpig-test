import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { ProductRepositoryContext } from '@/app/contexts/ProductRepositoryContext';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';
import { ProductCategory } from '@/products/entities/ProductCategory';
import { Product } from '@/products/entities/Product';
import { cardsRoutes } from '../../routes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('CardListings', () => {
  it('should display "No cards available" if there is no available cards', async () => {
    renderCardListings({ products: [] });

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText('No cards available')).toBeInTheDocument();
  });

  it('should display the cards from the list of available products', async () => {
    renderCardListings({
      products: [
        {
          number: 'card-1',
          title: 'Card 1',
          category: ProductCategory.GreetingCards,
          images: ['https://moonpig.github.io/card-1.jpg'],
        },
        {
          number: '2',
          title: 'Card 2',
          category: ProductCategory.GreetingCards,
          images: ['https://moonpig.github.io/card-2.jpg'],
        },
        {
          number: '3',
          title: 'T-Shirt 3',
          category: ProductCategory.TShirts,
          images: ['https://moonpig.github.io/tshirt-3.jpg'],
        },
      ],
    });

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    const imgs = await screen.findAllByRole('img');

    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveAttribute('alt', 'Card 1');
    expect(imgs[0]).toHaveAttribute(
      'src',
      'https://moonpig.github.io/card-1.jpg',
    );
    expect(imgs[1]).toHaveAttribute('alt', 'Card 2');
    expect(imgs[1]).toHaveAttribute(
      'src',
      'https://moonpig.github.io/card-2.jpg',
    );

    await user.click(imgs[0]);
    expect(mockedUseNavigate).toHaveBeenCalledWith('card-1');
  });
});

function renderCardListings({ products }: { products: Product[] }) {
  const productRepository = new InMemoryProductRepository();
  productRepository.initAvailableProducts(products);

  // the cards scope router can also be tested thanks to the MemoryRouter
  const cardsRouter = createMemoryRouter(cardsRoutes, {
    initialEntries: ['/cards'],
  });

  return render(
    <ProductRepositoryContext.Provider value={productRepository}>
      <RouterProvider router={cardsRouter} />
    </ProductRepositoryContext.Provider>,
  );
}
