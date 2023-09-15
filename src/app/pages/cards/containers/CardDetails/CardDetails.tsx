import React from 'react';

import { CardDetailsUI } from '../../components/CardDetailsUI';
import { useViewDetailsOfCard } from './useViewDetailsOfCard';

export const CardDetails = () => {
  debugger;
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
