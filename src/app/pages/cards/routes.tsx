import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { useNavLinksIfRouteMatch } from '@/app/common/hooks/useNavLinks';

const Cards = lazy(() => import('./containers/Cards'));
const CardDetails = lazy(() => import('./containers/CardDetails/CardDetails'));

export const CARDS_BASE_ROUTE = 'cards';

const CARD_DETAILS_ROUTE = `${CARDS_BASE_ROUTE}/:cardNumber`;

export const cardsRoutes: RouteObject[] = [
  {
    path: CARDS_BASE_ROUTE,
    element: <Cards />,
  },
  {
    path: CARD_DETAILS_ROUTE,
    element: <CardDetails />,
  },
];

/**
 * Display the 'Back to Cards' link if the current route is the Card Details page
 */
export const useCardsNavBarLinks = () =>
  useNavLinksIfRouteMatch(CARD_DETAILS_ROUTE, [
    {
      to: CARDS_BASE_ROUTE,
      label: 'Back to Cards',
    },
  ]);
