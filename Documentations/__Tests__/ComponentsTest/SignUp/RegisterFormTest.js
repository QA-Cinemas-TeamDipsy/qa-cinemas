import React from 'react';
import renderer from 'react-test-renderer';
import RegisterForm from '../../../Components/SignUp/RegisterForm';

it('RegisterForm renders correctly', () => {
  const tree = renderer
    .create(<RegisterF />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});