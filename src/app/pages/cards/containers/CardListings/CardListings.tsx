import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DataDisplayerUI } from '@/app/common/components/DataDisplayerUI';
import { useViewListOfAvailableCards } from '@/app/pages/cards/containers/CardListings/useViewListOfAvailableCards';
import { CardsUI, CardsUIProps } from '@/app/pages/cards/components/CardsUI';

export function CardListings() {
  const { availableCards, isAvailableCardsLoading } =
    useViewListOfAvailableCards();

  const navigate = useNavigate();
  const onCardClick: CardsUIProps['onCardClick'] = card =>
    navigate(card.number);

  return (
    <DataDisplayerUI
      isLoading={isAvailableCardsLoading}
      data={availableCards}
      ComponentUI={CardsUI}
      additionalProps={{ onCardClick }}
      noDataMessage="No cards available"
    />
  );
}
