import React from 'react';
import renderer from 'react-test-renderer';
import CinemaCard from '../../../Components/Cinema_Details/CinemaCard';

it('CinemaCard renders correctly', () => {
  const tree = renderer
    .create(<CinemaCard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});