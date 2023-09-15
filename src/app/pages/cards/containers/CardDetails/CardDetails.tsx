import React from 'react';

import { CardDetailsUI } from '@/app/pages/cards/components/CardDetailsUI';

import { useViewDetailsOfCard } from './useViewDetailsOfCard';

export const CardDetails = () => {
  const { card, errorMessage, isCardLoading } = useViewDetailsOfCard();

  if (isCardLoading) {
    return <div>Loading...</div>;
  }

  if (card) {
    return <CardDetailsUI card={card} />;
  }

  if (errorMessage) {
    return <div data-testid="error-message">{errorMessage}</div>;
  }

  return null;
};
