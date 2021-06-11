import React from 'react';
import renderer from 'react-test-renderer';
import UserLogin from '../../../Components/SignUp/UserLogin';

it('UserLogin renders correctly', () => {
  const tree = renderer
    .create(<UserLoginm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});