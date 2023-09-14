import React from 'react';

import { CardDetailsUI } from '../../components/CardDetailsUI';
import { useViewDetailsOfCard } from './useViewDetailsOfCard';

const CardDetails = () => {
  const { card, errorMessage } = useViewDetailsOfCard();

  return card ? <CardDetailsUI card={card} /> : <div>{errorMessage}</div>;
};

export default CardDetails;
