import React from 'react';
import { shallow } from 'enzyme';
import NoResult from './NoResult';

describe('BookTitle Component', () => {

  it('renders without crashing', () => {
    shallow(<NoResult />);
  });

  it('includes div', () => {
    const app = shallow(<NoResult />);
    expect(app.containsMatchingElement(<div />)).toEqual(true)
  });

  it('includes p', () => {
    const app = shallow(<NoResult click text={'Brak wyników'} />);
    expect(app.find('p').text()).toContain('Brak wyników')
  });
});