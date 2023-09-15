import React, { lazy } from 'react';
import { RouteObject, createMemoryRouter } from 'react-router-dom';

import { useNavLinksIfRouteMatch } from '@/app/common/hooks/useNavLinks';

const CardListings = lazy(() => import('./containers/CardListings'));
const CardDetails = lazy(() => import('./containers/CardDetails'));

export const CARDS_BASE_ROUTE = 'cards';

const CARD_DETAILS_ROUTE = `${CARDS_BASE_ROUTE}/:cardNumber`;

export const cardsRoutes: RouteObject[] = [
  {
    path: CARDS_BASE_ROUTE,
    element: <CardListings />,
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
