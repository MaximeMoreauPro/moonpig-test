import React from 'react';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div>
      <header>
        <h1>Moonpig Test</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
