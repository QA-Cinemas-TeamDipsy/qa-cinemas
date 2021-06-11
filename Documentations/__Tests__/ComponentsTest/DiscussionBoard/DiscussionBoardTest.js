import React from 'react';
import renderer from 'react-test-renderer';
import DiscussionBoard from '../../../Components/DiscussionBoard/DiscussionBoard.jsx';


it('Discussion Page renders correctly', () => {
  const tree = renderer
    .create(<DiscussionBoard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

