import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';


const setUp = () => {
  const component = shallow(<Loading />)
  return component;
};

describe('Loading Component', () => {

  let component;
  beforeEach(() => {
    component = setUp()
  });

  it('render without errors', () => {
    const wrapper = component.find(`[data-test='loading']`);
    expect(wrapper.length).toBe(1);
  })

  it('render a div', () => {
    const div = component.find('div')
    expect(div.length).toBe(5);
  });
})