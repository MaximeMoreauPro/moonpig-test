import React, { lazy } from 'react';
import { Link, RouteObject, useMatch } from 'react-router-dom';

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

export const CardsNavBarLinks = () => {
  const isCardDetail = useMatch(CARD_DETAIL_ROUTE);
  return isCardDetail && <Link to={CARDS_BASE_ROUTE}>Back to cards</Link>;
};
