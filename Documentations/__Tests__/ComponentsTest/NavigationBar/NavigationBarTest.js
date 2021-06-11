import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../../../Components/NavigationBar/NavigationBar';

it('NavigationBar renders correctly', () => {
  const tree = renderer
    .create(<NavigationBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});