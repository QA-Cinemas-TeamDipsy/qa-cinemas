import React from 'react';
import renderer from 'react-test-renderer';
import ContactUs from '../../../Components/ContactUs/ContactUs';

it('ContactUs renders correctly', () => {
  const tree = renderer
    .create(<ContactUs />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});