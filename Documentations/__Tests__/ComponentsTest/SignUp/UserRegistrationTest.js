import React from 'react';
import renderer from 'react-test-renderer';
import UserRegistration from '../../../Components/SignUp/UserR'g;

it('UserRegistration renders correctly', () => {
  const tree = renderer
    .create(<UserRegistration />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});