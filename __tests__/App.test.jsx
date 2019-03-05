import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App title="ENEKcalc" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
