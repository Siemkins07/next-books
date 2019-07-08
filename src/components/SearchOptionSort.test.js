import React from 'react';
import { shallow } from 'enzyme';
import SearchOptionSort from './SearchOptionSort'

describe('SearchOptionSort Component', () => {

  it('renders without crashing', () => {
    shallow(<SearchOptionSort />);
  });
  it('includes input', () => {
    const app = shallow(<SearchOptionSort />);
    expect(app.containsMatchingElement(<input />)).toEqual(true)
  });
  it('includes label', () => {
    const app = shallow(<SearchOptionSort />);
    expect(app.find('label').text('Najnowsze')).toContain("Najnowsze")
  });
});