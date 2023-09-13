import React, { memo } from 'react';

import { Product } from '@/products/entities/Product';
import { CardItemUI } from './CardItemUI';

export type CardsUIProps = {
  items: Product[];
  onCardClick: (card: Product) => void;
};

export const CardsUI = memo<CardsUIProps>(({ items, onCardClick }) => (
  <div>
    {items.map(card => (
      <CardItemUI
        key={card.number}
        card={card}
        onClick={() => onCardClick(card)}
      />
    ))}
  </div>
));
