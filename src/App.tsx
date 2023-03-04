import React from 'react';
import Routes from './routes';
import { RouterProvider } from 'react-router-dom';
import ApolloProviderWrapper from './apollo/providerWrapper';

const App = () => {
  return (
    <React.StrictMode>
      <ApolloProviderWrapper>
        <RouterProvider router={Routes()} />
      </ApolloProviderWrapper>
    </React.StrictMode>
  );
};

export default App;
