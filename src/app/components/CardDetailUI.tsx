import React, { memo } from 'react';

type CardDetailUIProps = {
  cardNumber: string;
};
export const CardDetailUI = memo<CardDetailUIProps>(({ cardNumber }) => {
  return <div>{cardNumber}</div>;
});
