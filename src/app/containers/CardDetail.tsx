import React from 'react';
import { useParams } from 'react-router-dom';

import { CardDetailUI } from '../components/CardDetailUI';

export const CardDetail = () => {
  const { cardNumber } = useParams();
  return cardNumber && <CardDetailUI cardNumber={cardNumber} />;
};
