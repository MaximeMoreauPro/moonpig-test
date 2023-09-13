import { ProductRepository } from '../ProductRepository';
import { Product } from '../entities/Product';
import { ProductCategory } from '../entities/ProductCategory';

type API_SearchResponse = {
  Products: {
    ProductCategory: {
      ProductCategoryId: ProductCategory;
    };
    Title: string;
    MoonpigProductNo: string;
    ProductImage: {
      Link: {
        Href: string;
      };
    };
  }[];
};

export class API_ProductRepository implements ProductRepository {
  async searchProductsByCategory(criterias: {
    categories: ProductCategory[];
  }): Promise<Product[]> {
    let filteredProducts: Product[] = [];

    const response = await fetch(
      'https://moonpig.github.io/tech-test-frontend/search.json',
    );

    if (response.ok) {
      const allProducts: API_SearchResponse = await response.json();

      filteredProducts = allProducts.Products.filter(
        ({ ProductCategory: { ProductCategoryId } }) =>
          criterias.categories.includes(ProductCategoryId),
      ).map(
        ({
          MoonpigProductNo,
          Title,
          ProductCategory: { ProductCategoryId },
          ProductImage: {
            Link: { Href },
          },
        }) => ({
          number: MoonpigProductNo,
          title: Title,
          category: ProductCategoryId,
          image: Href,
        }),
      );
      return filteredProducts;
    }

    return Promise.resolve(filteredProducts);
  }
}
