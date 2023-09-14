import { ProductRepository } from '../ProductRepository';
import { Product } from '../entities/Product';
import { ProductCategory } from '../entities/ProductCategory';

export class API_ProductRepository implements ProductRepository {
  async searchProductsByCategory(criterias: { categories: ProductCategory[] }) {
    let filteredProducts: Product[] = [];

    const response = await fetch(
      'https://moonpig.github.io/tech-test-frontend/search.json',
    );

    if (response.ok) {
      const allProducts: API_SearchResponse = await response.json();

      filteredProducts = allProducts.Products.filter(
        ({ ProductCategory: { ProductCategoryId } }) =>
          criterias.categories.includes(ProductCategoryId),
      ).map(API_SearchProductToProduct);

      return filteredProducts;
    }

    return Promise.resolve(filteredProducts);
  }

  async fetchProductByNumber(productNumber: string) {
    const response = await fetch(
      `https://moonpig.github.io/tech-test-frontend/product/${productNumber}.json`,
    );

    if (response.ok) {
      const product: API_ProductDetails = await response.json();
      return API_ProductDetailsToProduct(product);
    }
  }
}

type API_SearchProduct = {
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
};

type API_SearchResponse = {
  Products: API_SearchProduct[];
};

function API_SearchProductToProduct(apiProduct: API_SearchProduct): Product {
  return {
    number: apiProduct.MoonpigProductNo,
    title: apiProduct.Title,
    category: apiProduct.ProductCategory.ProductCategoryId,
    images: [apiProduct.ProductImage.Link.Href],
  };
}

type API_ProductDetails = {
  ProductCategoryId: ProductCategory;
  Title: string;
  MoonpigProductNo: string;
  ImageUrls: {
    ImageUrl: string;
  }[];
};

function API_ProductDetailsToProduct(apiProduct: API_ProductDetails): Product {
  return {
    number: apiProduct.MoonpigProductNo,
    title: apiProduct.Title,
    category: apiProduct.ProductCategoryId,
    images: apiProduct.ImageUrls.map(({ ImageUrl }) => ImageUrl),
  };
}
