import React from 'react';
import renderer from 'react-test-renderer';
import CinemaMap from '../../../Components/Cinema_Details/CinemaMap';

it('CinemaMap renders correctly', () => {
  const tree = renderer
    .create(<CinemaMap />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});