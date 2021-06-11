import React from 'react';
import renderer from 'react-test-renderer';
import MovieTimes from '../../../Components/Booking/MovieTimes';

it('MovieTimes renders correctly', () => {
  const tree = renderer
    .create(<MovieTimes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});