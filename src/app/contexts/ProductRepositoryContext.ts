import { createContext, useContext } from 'react';

import { ProductRepository } from '@/products/ProductRepository';
import { API_ProductRepository } from '@/products/infrastructure/ProductRepository.api';

export const ProductRepositoryContext = createContext<ProductRepository>(
  new API_ProductRepository(),
);

export const useProductRepository = () => useContext(ProductRepositoryContext);
