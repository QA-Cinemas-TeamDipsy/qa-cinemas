import React from 'react';
import renderer from 'react-test-renderer';
import Classifications from '../../../Components/Classifcations/Classifcations';

it('Classifications renders correctly', () => {
  const tree = renderer
    .create(<Classifications />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});