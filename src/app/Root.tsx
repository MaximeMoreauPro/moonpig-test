import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';
import { Header } from './common/components/Header';

export const Root = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
