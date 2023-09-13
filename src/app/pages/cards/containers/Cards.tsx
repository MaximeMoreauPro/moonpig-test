import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DataDisplayerUI } from '@/app/common/components/DataDIsplayer';

import { useAvailableCards } from '../../../hooks/useAvailableCards';
import { CardsUI, CardsUIProps } from '../components/CardsUI';

export default function Cards() {
  const { availableCards, isAvailableCardsLoading } = useAvailableCards();

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
