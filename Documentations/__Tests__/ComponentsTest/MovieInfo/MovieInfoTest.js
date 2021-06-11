import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from '../../../Components/MovieInfo/MovieInfo';

it('MovieInfo renders correctly', () => {
  const tree = renderer
    .create(<MovieInfo />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});