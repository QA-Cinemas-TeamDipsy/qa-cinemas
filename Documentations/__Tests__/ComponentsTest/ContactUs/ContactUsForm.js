import React from 'react';
import renderer from 'react-test-renderer';
import ContactUsForm from '../../../Components/ContactUs/ContactUsForm';

it('ContactUsForm renders correctly', () => {
  const tree = renderer
    .create(<ContactUsForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});