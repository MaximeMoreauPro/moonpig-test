import React from 'react';

import { CardDetailsUI } from '../../components/CardDetailsUI';
import { useViewDetailsOfCard } from './useViewDetailsOfCard';

export const CardDetails = () => {
  const { card, errorMessage, isCardLoading } = useViewDetailsOfCard();

  if (isCardLoading) {
    return <div>Loading...</div>;
  }

  return card ? <CardDetailsUI card={card} /> : <div>{errorMessage}</div>;
};
