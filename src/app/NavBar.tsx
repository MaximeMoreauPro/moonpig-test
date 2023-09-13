import React from 'react';
import { Link } from 'react-router-dom';

import { useCardsNavBarLinks } from './pages/cards/routes';
import { LinkData, useHomeNavBarLinks, useNotHomeNavBarLinks } from './router';

import './NavBar.scss';

export const NavBar = () => {
  const links = [
    ...useNotHomeNavBarLinks(),
    ...useHomeNavBarLinks(),
    ...useCardsNavBarLinks(),
  ];

  return <NavBarUI links={links} />;
};

type NavBarUIProps = {
  links: LinkData[];
};

const NavBarUI = ({ links }: NavBarUIProps) => {
  return (
    links.length > 0 && (
      <nav>
        {links.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </nav>
    )
  );
};
