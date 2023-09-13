import React from 'react';
import { Link } from 'react-router-dom';

import { LinkData } from '@/app/router';
import { Nav } from './NavBarUI.styled';

type NavBarUIProps = {
  links: LinkData[];
};

export const NavBarUI = ({ links }: NavBarUIProps) => {
  return (
    links.length > 0 && (
      <Nav>
        {links.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Nav>
    )
  );
};
