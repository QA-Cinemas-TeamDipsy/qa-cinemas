import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../../../Components/Banner/Banner';

it('Banner renders correctly', () => {
  const tree = renderer
    .create(<Banner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});