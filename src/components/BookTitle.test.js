import React from 'react';
import { shallow } from 'enzyme';
import BookTitle from './BookTitle';

describe('BookTitle Component', () => {

  it('renders without crashing', () => {
    shallow(<BookTitle />);
  });
});