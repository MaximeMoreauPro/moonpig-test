import React from 'react';
import {
  RouteObject,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';

import { Root } from './Root';
import { CARDS_BASE_ROUTE, cardsRoutes } from './pages/cards/routes';
import {
  useNavLinksIfRouteMatch,
  useNavLinksIfRouteNotMatch,
} from './common/hooks/useNavLinks';

const HOME_ROUTE = '/';

const routes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    element: <Root />,
    children: [...cardsRoutes],
  },
];

/**
 * Display the 'Cards' link if the current route is the Home page
 */
export const useHomeNavBarLinks = () =>
  useNavLinksIfRouteMatch(HOME_ROUTE, [
    {
      to: CARDS_BASE_ROUTE,
      label: 'Cards',
    },
  ]);

/**
 * Display the 'Back to Home' link if the current route is not the Home page
 */
export const useNotHomeNavBarLinks = () =>
  useNavLinksIfRouteNotMatch(HOME_ROUTE, [
    {
      to: HOME_ROUTE,
      label: 'Back to Home',
    },
  ]);

/**
 * Some hosting providers as Github Page must use HashRouter because they don't support BrowserRouter
 * HASH_ROUTER env variable can be set to true in the appropriate package.json script (eg. predeploy:gh-pages)
 */
export const router =
  process.env.HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
