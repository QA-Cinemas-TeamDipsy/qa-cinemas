import React from 'react';
import renderer from 'react-test-renderer';
import RegisterButton from '../../../Components/NavigationBar/RegisterButton';

it('RegisterButton renders correctly', () => {
  const tree = renderer
    .create(<RegisterButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});