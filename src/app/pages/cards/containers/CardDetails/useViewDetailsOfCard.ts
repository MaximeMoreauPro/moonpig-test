import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Product } from '@/products/entities/Product';
import { useProductRepository } from '@/app/contexts/ProductRepositoryContext';
import { ViewDetailsOfCardUseCase } from '@/use-cases/ViewDetailsOfCard/ViewDetailsOfCard.use-case';
import { useLoading } from '@/app/common/hooks/useLoading';

export function useViewDetailsOfCard() {
  const [card, setCard] = useState<Product>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { pathname } = useLocation();

  const { cardNumber } = useParams<{ cardNumber: string }>();

  const productRepository = useProductRepository();
  const viewDetailsOfCard = new ViewDetailsOfCardUseCase(productRepository);

  const { isLoading: isCardLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    async function fetchCardDetails() {
      if (cardNumber) {
        startLoading();
        const result = await viewDetailsOfCard.handle({
          cardNumber,
        });
        stopLoading();

        if ('card' in result) {
          setCard(result.card);
        } else {
          setErrorMessage(result.errorMessage);
        }
      }
    }
    fetchCardDetails();
  }, []);

  return { card, errorMessage, isCardLoading };
}
