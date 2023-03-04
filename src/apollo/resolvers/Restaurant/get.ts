import { gql, useQuery } from '@apollo/client';
import { QueryGetRestaurantArgs, Restaurant } from 'src/apollo/generated/types';

const GET_RESTAURANT_QUERY = gql`
  query getRestaurant($input: GetRestaurantInput!) {
    getRestaurant(input: $input) {
      name
    }
  }
`;

const useGetRestaurantQuery = (id: string) => {
  return useQuery<
    {
      getRestaurant: Restaurant;
    },
    QueryGetRestaurantArgs
  >(GET_RESTAURANT_QUERY, {
    variables: {
      input: {
        id,
      },
    },
  });
};

export default useGetRestaurantQuery;
