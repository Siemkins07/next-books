import React from 'react';
import { shallow } from 'enzyme';
import SearchOptionNumber from './SearchOptionNumber'


describe('SearchOptionNumber Component', () => {

  it('renders without crashing', () => {
    shallow(<SearchOptionNumber />);
  });
  it('includes label text', () => {
    const app = shallow(<SearchOptionNumber />);
    expect(app.find('label').text('Wyników:')).toEqual('Wyników:')
  });
});