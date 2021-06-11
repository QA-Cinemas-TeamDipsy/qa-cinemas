import React from 'react';
import renderer from 'react-test-renderer';
import BookTickets from '../../../Components/Booking/BookTickets';

it('AboutCard renders correctly', () => {
  const tree = renderer
    .create(<BookTickets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});