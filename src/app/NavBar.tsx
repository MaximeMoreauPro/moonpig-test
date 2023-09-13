import React from 'react';

import { useCardsNavBarLinks } from './pages/cards/routes';
import { useHomeNavBarLinks, useNotHomeNavBarLinks } from './router';

import { NavBarUI } from './common/components/NavBarUI';

export const NavBar = () => {
  const links = [
    ...useNotHomeNavBarLinks(),
    ...useHomeNavBarLinks(),
    ...useCardsNavBarLinks(),
  ];

  return <NavBarUI links={links} />;
};
