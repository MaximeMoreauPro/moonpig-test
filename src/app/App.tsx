import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const App = () => {
  return (
    <React.StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
};

export default App;
