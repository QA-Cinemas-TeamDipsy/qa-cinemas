import React from 'react';
import renderer from 'react-test-renderer';
import PaymentForm from '../../../Components/Booking/PaymentForm';

it('PaymentForm renders correctly', () => {
  const tree = renderer
    .create(<PaymentForm />
    .toJSON();
  expect(tree).toMatchSnapshot();
});