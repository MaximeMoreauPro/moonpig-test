import React from 'react';
import {
  Link,
  RouteObject,
  createBrowserRouter,
  createHashRouter,
  useMatch,
} from 'react-router-dom';

import { Root } from './Root';
import { CARDS_BASE_ROUTE, cardsRoutes } from './pages/cards/routes';

const HOME_ROUTE = '/';

const routes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Root />,
    children: [...cardsRoutes],
  },
];

export const HomeNavBarLinks = () => {
  const isHome = useMatch(HOME_ROUTE);
  return isHome && <Link to={CARDS_BASE_ROUTE}>Cards</Link>;
};

// Github Page uses HashRouter because it doesn't support BrowserRouter
export const router =
  process.env.HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
