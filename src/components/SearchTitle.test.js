import React from 'react';
import { shallow } from 'enzyme';
import SearchTitle from './SearchTitle';

describe('SearchTitle Component', () => {

  it('renders without crashing', () => {
    shallow(<SearchTitle />);
  });
  it('includes input', () => {
    const searchTitle = shallow(< SearchTitle />);
    expect(searchTitle.containsMatchingElement(< input />)).toEqual(true)
  });
});