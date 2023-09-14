import React, { memo } from 'react';

import { Product } from '@/products/entities/Product';
import { CardImage, CardItemContainer } from './CardItemUI.styled';

type CardItemUIProps = { card: Product; onClick: () => void };

export const CardItemUI = memo<CardItemUIProps>(({ card, onClick }) => (
  <CardItemContainer onClick={onClick}>
    <CardImage src={card.images[0]} alt={card.title} />
  </CardItemContainer>
));
