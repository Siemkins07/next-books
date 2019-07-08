import React from 'react';
import { shallow } from 'enzyme';
import SearchAuthor from './SearchAuthor'

describe('SearchAuthor Component', () => {

  it('renders without crashing', () => {
    shallow(<SearchAuthor />);
  });
  it('includes input', () => {
    const app = shallow(<SearchAuthor />);
    expect(app.containsMatchingElement(<input />)).toEqual(true)
  });
});