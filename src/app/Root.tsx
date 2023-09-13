import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Root = () => {
  return (
    <div>
      <header>
        <h1>Maxime Moreau - Moonpig Test</h1>
      </header>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
