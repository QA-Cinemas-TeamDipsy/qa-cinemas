import React from 'react';
import renderer from 'react-test-renderer';
import CinemaPin from '../../../Components/Cinema_Details/CinemaPin';

it('CinemaPin renders correctly', () => {
  const tree = renderer
    .create(<CinemaPin />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});