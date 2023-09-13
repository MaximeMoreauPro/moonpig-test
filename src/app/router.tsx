import React from 'react';
import {
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

export type LinkData = {
  to: string;
  label: string;
};

export const useHomeNavBarLinks = (): LinkData[] => {
  const homeNavBarLinks: LinkData[] = [];

  const isHome = useMatch(HOME_ROUTE);

  if (isHome) {
    homeNavBarLinks.push({
      to: CARDS_BASE_ROUTE,
      label: 'Cards',
    });
  }

  return homeNavBarLinks;
};

export const useNotHomeNavBarLinks = (): LinkData[] => {
  const notHomeNavBarLinks: LinkData[] = [];

  const isHome = useMatch(HOME_ROUTE);

  if (!isHome) {
    notHomeNavBarLinks.push({
      to: HOME_ROUTE,
      label: 'Back to Home',
    });
  }

  return notHomeNavBarLinks;
};

// Github Page uses HashRouter because it doesn't support BrowserRouter
export const router =
  process.env.HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
