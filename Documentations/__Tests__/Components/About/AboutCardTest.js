import React from 'react';
import renderer from 'react-test-renderer';
import AboutCard from '../'

it('renders correctly', () => {
  const tree = renderer
    .create(<AboutCard/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});