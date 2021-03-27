import Home from '../Home.jsx'

import React from 'react';
import renderer from 'react-test-renderer';

test('Home should render with name', () => {
  const component = renderer.create(
    <Home name="Kasaz">Facebook</Home>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
