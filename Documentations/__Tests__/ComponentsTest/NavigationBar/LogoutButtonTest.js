import React from 'react';
import renderer from 'react-test-renderer';
import LogoutButton from '../../../Components/NavigationBar/LogoutButton';

it('LogoutButton renders correctly', () => {
  const tree = renderer
    .create(<LogoutButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});