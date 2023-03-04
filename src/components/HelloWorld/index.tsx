import React from 'react';
import { Link } from 'react-router-dom';
import useGetRestaurantQuery from 'src/apollo/resolvers/Restaurant/get';

const HelloWorld = () => {
  const { data } = useGetRestaurantQuery('1');
  console.log(data);
  return (
    <>
      <h1>Hello World</h1>

      <hr />

      <h3>Environmental variables:</h3>
      <p>
        process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
      </p>
      <p>
        process.env.NAME: <b>{process.env.NAME}</b>
      </p>
      <p>
        process.env.VERSION: <b>{process.env.VERSION}</b>
      </p>
      <p>sweet</p>
      <Link to="/test">test</Link>
    </>
  );
};

export default HelloWorld;
