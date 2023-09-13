import { createContext, useContext } from 'react';

import { ProductRepository } from '@/products/ProductRepository';
import { InMemoryProductRepository } from '@/products/infrastructure/ProductRepository.in-memory';
import { ProductCategory } from '@/products/entities/ProductCategory';
import { API_ProductRepository } from '@/products/infrastructure/ProductRepository.api';

const productRepository = new InMemoryProductRepository();
productRepository.initAvailableProducts([
  {
    number: '1',
    title: 'Card 1',
    category: ProductCategory.GreetingCards,
    image: 'https://picsum.photos/200/300',
  },
  {
    number: '2',
    title: 'Card 2',
    category: ProductCategory.GreetingCards,
    image: 'https://picsum.photos/200/300',
  },
  {
    number: '3',
    title: 'T-Shirt 3',
    category: ProductCategory.TShirts,
    image: 'https://picsum.photos/200/300',
  },
]);

export const ProductRepositoryContext = createContext<ProductRepository>(
  new API_ProductRepository(),
);

export const useProductRepository = () => useContext(ProductRepositoryContext);
