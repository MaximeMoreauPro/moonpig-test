import React from 'react';

import { CardsNavBarLinks } from './pages/cards/routes';
import { HomeNavBarLinks } from './router';

export const NavBar = () => (
  <nav>
    <HomeNavBarLinks />
    <CardsNavBarLinks />
  </nav>
);
