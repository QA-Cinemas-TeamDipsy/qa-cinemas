import React from 'react';
import renderer from 'react-test-renderer';
import LoginButton from '../../../Components/NavigationBar/LoginButton';

it('LoginButton renders correctly', () => {
  const tree = renderer
    .create(<LoginButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});