import React from 'react';
import { render, screen } from '@/app/test-utils';

import Cards from './Cards';
import { ProductRepositoryContext } from '@/app/contexts/ProductRepositoryContext';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';
import { ProductCategory } from '@/products/entities/ProductCategory';
import { Product } from '@/products/entities/Product';

describe('Cards', () => {
  it('should display "No cards available" if there is no cards', async () => {
    renderCardsWithProducts([]);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('No cards available')).toBeInTheDocument();
  });

  it('should display the cards', async () => {
    renderCardsWithProducts([
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

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const imgs = await screen.findAllByRole('img');
    expect(imgs).toHaveLength(2);
    expect(imgs[0]).toHaveAttribute('alt', 'Card 1');
    expect(imgs[1]).toHaveAttribute('alt', 'Card 2');
  });
});

function renderCardsWithProducts(products: Product[]) {
  const productRepository = new InMemoryProductRepository();
  productRepository.initAvailableProducts(products);

  return render(
    <ProductRepositoryContext.Provider value={productRepository}>
      <Cards />
    </ProductRepositoryContext.Provider>,
  );
}
