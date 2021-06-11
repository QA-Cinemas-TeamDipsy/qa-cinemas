import React from 'react';
import renderer from 'react-test-renderer';
import BookTicketsBtn from '../../../Components/Booking/BookTicketsBtn';

it('BookTicketsBtn renders correctly', () => {
  const tree = renderer
    .create(<BookTicketsBtn />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});