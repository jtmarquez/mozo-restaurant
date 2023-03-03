import React from 'react';
import Routes from './routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={Routes()} />
    </React.StrictMode>
  );
};

export default App;
