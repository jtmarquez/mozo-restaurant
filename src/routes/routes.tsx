import React from 'react';
import HelloWorld from 'components/HelloWorld';
import { RoutesDefinitionType } from './types';
import GeneralError from 'components/generalUI/GeneralError';

const defaultErrorPath = {
  path: '*',
  element: <GeneralError />,
};

export const routesDefinition: RoutesDefinitionType = [
  {
    path: '/',
    element: <HelloWorld />,
  },
  defaultErrorPath,
];
