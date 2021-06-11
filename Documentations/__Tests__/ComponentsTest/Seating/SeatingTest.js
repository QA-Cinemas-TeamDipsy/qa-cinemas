import React from 'react';
import renderer from 'react-test-renderer';
import Seating from '../../../Components/Seating/Seating'

it('Seating renders correctly', () => {
  const tree = renderer
    .create(<Seating />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});