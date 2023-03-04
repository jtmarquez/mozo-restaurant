import React, { FC, ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../client/client';

interface Props {
  children?: ReactNode | ReactNode[] | null;
}

const ApolloProviderWrapper: FC<Props> = (props: Props) => {
  const { children } = props;
  console.log(children);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
