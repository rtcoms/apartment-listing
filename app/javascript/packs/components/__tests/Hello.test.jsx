import Hello from '../Hello.jsx'

import React from 'react';
import renderer from 'react-test-renderer';

test('hello should render with name', () => {
  const component = renderer.create(
    <Hello name="Kasaz">Facebook</Hello>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
