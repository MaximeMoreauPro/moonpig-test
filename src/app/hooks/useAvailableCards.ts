import { useEffect, useState } from 'react';

import { Product } from '@/products/entities/Product';
import { ViewListOfAvailableCardsUseCase } from '@/use-cases/ViewListOfAvailableCards/ViewListOfAvailableCards.use-case';
import { useProductRepository } from '../contexts/ProductRepositoryContext';
import { useLoading } from '@/app/common/hooks/useLoading';

export function useAvailableCards() {
  const [availableCards, setAvailableCards] = useState<Product[]>([]);

  const {
    isLoading: isAvailableCardsLoading,
    startLoading,
    stopLoading,
  } = useLoading();

  const viewListOfAvailableCardsUseCase = new ViewListOfAvailableCardsUseCase(
    useProductRepository(),
  );

  useEffect(() => {
    async function fetchAvailableCards() {
      startLoading();
      const availableCards = await viewListOfAvailableCardsUseCase.handle();
      stopLoading();
      setAvailableCards(availableCards);
    }
    fetchAvailableCards();
  }, []);

  return {
    isAvailableCardsLoading,
    availableCards,
  };
}
