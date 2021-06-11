import React from 'react';
import renderer from 'react-test-renderer';
import Movies from '../../../Components/MovieGallery/Movies';

it('Movies renders correctly', () => {
  const tree = renderer
    .create(<Movies />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});