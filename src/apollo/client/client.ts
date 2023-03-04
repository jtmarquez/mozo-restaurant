import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
  name: 'web-client',
  queryDeduplication: false,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
      context: {
        headers: {
          'x-custom-header': 'pancakes',
        },
      },
    },
  },
});

export default client;
