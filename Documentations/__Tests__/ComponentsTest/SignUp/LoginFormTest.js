import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '../../../Components/SignUp/LoginForm';

it('LoginForm renders correctly', () => {
  const tree = renderer
    .create(<LoginForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});