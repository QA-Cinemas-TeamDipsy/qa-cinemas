import React from 'react';
import renderer from 'react-test-renderer';
import CreatePost from '../../../Components/DiscussionBoard/CreatePost';

it('CreatePost renders correctly', () => {
  const tree = renderer
    .create(<CreatePost />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});