import React, { memo } from 'react';

import { Product } from '@/products/entities/Product';
import { CardItemUI } from '../CardItemUI/CardItemUI';
import { CardsContainer } from './CardsUI.styled';

export type CardsUIProps = {
  items: Product[];
  onCardClick: (card: Product) => void;
};

export const CardsUI = memo<CardsUIProps>(({ items, onCardClick }) => (
  <CardsContainer>
    {items.map(card => (
      <CardItemUI
        key={card.number}
        card={card}
        onClick={() => onCardClick(card)}
      />
    ))}
  </CardsContainer>
));
