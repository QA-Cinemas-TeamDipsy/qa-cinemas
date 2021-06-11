import React from 'react';
import renderer from 'react-test-renderer';
import CinemaModal from '../../../Components/Cinema_Details/CinemaModal';

it('CinemaModal renders correctly', () => {
  const tree = renderer
    .create(<CinemaModal />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});