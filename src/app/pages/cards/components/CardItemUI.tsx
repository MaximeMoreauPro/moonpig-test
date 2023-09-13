import React, { memo } from 'react';

import { Product } from '@/products/entities/Product';

type CardItemUIProps = { card: Product; onClick: () => void };

export const CardItemUI = memo<CardItemUIProps>(({ card, onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer' }}>
    <h2>{card.title}</h2>
    <img src={card.image} alt={card.title} />
  </div>
));
