import React from 'react';
import renderer from 'react-test-renderer';
import AboutCard from '../../../Components/About/AboutCard';

it('AboutCard renders correctly', () => {
  const tree = renderer
    .create(<AboutCard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});