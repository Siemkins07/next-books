import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AdvancedOptionsCheckbox from './AdvancedOptionsCheckbox';

describe('<AdvancedOptions />', () => {

  it('render without crashing', () => {
    shallow(<AdvancedOptionsCheckbox />);
  });

  it('includes input', () => {
    const app = shallow(<AdvancedOptionsCheckbox />);
    expect(app.containsMatchingElement(<input />)).to.equal(true)
  });
});
