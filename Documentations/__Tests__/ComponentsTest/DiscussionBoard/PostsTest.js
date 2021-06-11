import React from 'react';
import renderer from 'react-test-renderer';
import Posts from '../../../Components/DiscussionBoard/Posts.jsx';


it('Discussion Page, Posts Tab renders correctly', () => {
  const tree = renderer
    .create(<Posts />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

