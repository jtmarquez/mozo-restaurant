import React from 'react';
import { RouteDefinitionObject, RouteWrapperInput, RoutesDefinitionType } from './types';

const routeWrapper = ({ routeDef }: RouteWrapperInput): RoutesDefinitionType => {
  const routes = routeDef.map((routeDef) => {
    const route: RouteDefinitionObject = {
      ...routeDef,
    };
    return route;
  });
  return routes;
};

export default routeWrapper;
