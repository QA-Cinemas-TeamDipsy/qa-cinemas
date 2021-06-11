import React from 'react';
import renderer from 'react-test-renderer';
import SearchedMovie from '../../../Components/SearchedMovie/SearchedMovie';

it('SearchedMovie renders correctly', () => {
  const tree = renderer
    .create(<SearchedMovie />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});