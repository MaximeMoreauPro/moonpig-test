import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Product } from '@/products/entities/Product';
import { useProductRepository } from '@/app/contexts/ProductRepositoryContext';
import { ViewDetailsOfCardUseCase } from '@/use-cases/ViewDetailsOfCard/ViewDetailsOfCard.use-case';

export function useViewDetailsOfCard() {
  const [card, setCard] = useState<Product>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { cardNumber } = useParams<{ cardNumber: string }>();

  const productRepository = useProductRepository();
  const viewDetailsOfCard = new ViewDetailsOfCardUseCase(productRepository);

  useEffect(() => {
    async function fetchCardDetails() {
      if (!card && cardNumber) {
        const result = await viewDetailsOfCard.handle({
          cardNumber,
        });

        if ('card' in result) {
          setCard(result.card);
        } else {
          setErrorMessage(result.errorMessage);
        }
      }
    }
    fetchCardDetails();
  }, [card, cardNumber, viewDetailsOfCard]);

  return { card, errorMessage };
}
