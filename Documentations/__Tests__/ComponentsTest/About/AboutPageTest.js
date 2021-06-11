import React from 'react';
import renderer from 'react-test-renderer';
import AboutCardPage from '../../../Components/About/AboutCardPage';

it('AboutPage renders correctly', () => {
  const tree = renderer
    .create(<AboutCardPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});