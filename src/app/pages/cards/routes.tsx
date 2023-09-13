import { LinkData } from '@/app/router';
import React, { lazy } from 'react';
import { RouteObject, useMatch } from 'react-router-dom';

const Cards = lazy(() => import('./containers/Cards'));
const CardDetail = lazy(() => import('./containers/CardDetail'));

export const CARDS_BASE_ROUTE = 'cards';

const CARD_DETAIL_ROUTE = `${CARDS_BASE_ROUTE}/:cardNumber`;

export const cardsRoutes: RouteObject[] = [
  {
    path: CARDS_BASE_ROUTE,
    element: <Cards />,
  },
  {
    path: CARD_DETAIL_ROUTE,
    element: <CardDetail />,
  },
];

export const useCardsNavBarLinks = (): LinkData[] => {
  const cardsNavBarLinks: LinkData[] = [];

  const isCardDetail = useMatch(CARD_DETAIL_ROUTE);

  if (isCardDetail) {
    cardsNavBarLinks.push({
      to: CARDS_BASE_ROUTE,
      label: 'Back to Cards',
    });
  }

  return cardsNavBarLinks;
};
