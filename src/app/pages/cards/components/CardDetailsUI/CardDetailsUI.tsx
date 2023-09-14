import React, { memo } from 'react';

import { Product } from '@/products/entities/Product';
import { CardDetailsContainer, StyledCarousel } from './CardDetailsUI.styled';

type CardDetailsUIProps = {
  card: Product;
};

export const CardDetailsUI = memo<CardDetailsUIProps>(({ card }) => {
  return (
    <CardDetailsContainer>
      <h2>{card.title}</h2>
      <StyledCarousel images={card.images} />
    </CardDetailsContainer>
  );
});
