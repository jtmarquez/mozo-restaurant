import React from 'react';
import { Link } from 'react-router-dom';

const HelloWorld = () => (
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

export default HelloWorld;
