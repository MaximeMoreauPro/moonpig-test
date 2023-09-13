import { ProductCategory } from './ProductCategory';

export interface Product {
  number: string;
  category: ProductCategory;
  title: string;
  image: string;
}
