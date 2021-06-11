import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../../../Components/MovieGallery/MovieList';

it('MovieList renders correctly', () => {
  const tree = renderer
    .create(<MovieList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});