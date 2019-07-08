import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';
import NoResult from './NoResult';
import BookList from './BookList';

describe('Result Component', () => {

  it('renders without crashing', () => {
    shallow(<Result />);
  });

  it('includes component BookList', () => {
    const app = shallow(<Result books />);
    expect(app.containsMatchingElement(<BookList />)).toEqual(true)
  });

  it('includes component NoResult', () => {
    const app = shallow(<Result click />);
    expect(app.containsMatchingElement(<NoResult />)).toEqual(true)
  });

  // it('includes component', () => {
  //   const app = shallow(<Result />);
  //   expect(app.containsMatchingElement(<BookList />)).toEqual(true)
  // });
});