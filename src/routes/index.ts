import { createBrowserRouter } from 'react-router-dom';
import { routesDefinition } from './routes';
import routeWrapper from './routeWrapper';

const Routes = () => {
  const wrappedRoutes = routeWrapper({ routeDef: routesDefinition });
  const browserRouter = createBrowserRouter(wrappedRoutes);

  return browserRouter;
};

export default Routes;
