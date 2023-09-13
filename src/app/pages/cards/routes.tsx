import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { useNavLinksIfRouteMatch } from '@/app/common/hooks/useNavLinks';

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

/**
 * Display the 'Back to Cards' link if the current route is the Card Detail page
 */
export const useCardsNavBarLinks = () =>
  useNavLinksIfRouteMatch(CARD_DETAIL_ROUTE, [
    {
      to: CARDS_BASE_ROUTE,
      label: 'Back to Cards',
    },
  ]);
