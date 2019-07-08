import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AdvancedOptions from './AdvancedOptions';
import SearchOptionNumber from './SearchOptionNumber';
import SearchOptionLang from './SearchOptionLang';
import SearchOptionSort from './SearchOptionSort';

describe('<AdvancedOptions />', () => {
  it('renders component SearchOptionNumber', () => {
    const wrapper = shallow(<AdvancedOptions />)
    expect(wrapper.containsMatchingElement(<SearchOptionNumber />)).to.equal(true)
  });
  it('renders component SearchOptionLang', () => {
    const wrapper = shallow(<AdvancedOptions />)
    expect(wrapper.containsMatchingElement(<SearchOptionLang />)).to.equal(true)
  });
  it('renders component SearchOptionSort', () => {
    const wrapper = shallow(<AdvancedOptions />)
    expect(wrapper.containsMatchingElement(<SearchOptionSort />)).to.equal(true)
  });
});