import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { Cards } from './containers/Cards';
import { CardDetail } from './containers/CardDetail';

export const router = createBrowserRouter([
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
]);
