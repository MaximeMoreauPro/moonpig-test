import React from 'react';
import {
  RouteObject,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';

import { Root } from './Root';
import { Cards } from './containers/Cards';
import { CardDetail } from './containers/CardDetail';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'cards',
        element: <Cards />,
      },
      {
        path: 'cards/:cardNumber',
        element: <CardDetail />,
      },
    ],
  },
];

// Github Page use HashRouter because it doesn't support BrowserRouter
export const router =
  process.env.HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
