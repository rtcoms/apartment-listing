import Home from '../Home.jsx'

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

test('Home should render with name', () => {
  const component = renderer.create(
    <BrowserRouter><Home></Home></BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
