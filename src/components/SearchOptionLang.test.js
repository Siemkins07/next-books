import React from 'react';
import { shallow } from 'enzyme';
import SearchOptionLang from './SearchOptionLang'

describe('SearchOptionLang Component', () => {

  it('renders without crashing', () => {
    shallow(<SearchOptionLang />);
  });

  it('includes label', () => {
    const app = shallow(<SearchOptionLang />);
    expect(app.find('label').text('Język:')).toEqual('Język:')
  });
});