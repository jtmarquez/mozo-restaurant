import { RouteObject } from 'react-router-dom';

type RouteDefinitionObject = RouteObject & {
  errorElement?: React.ReactNode | null;
};
type RoutesDefinitionType = RouteDefinitionObject[];

interface RouteWrapperInput {
  routeDef: RoutesDefinitionType;
}

export { RoutesDefinitionType, RouteDefinitionObject, RouteWrapperInput };
