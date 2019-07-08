import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import SearchTitle from './SearchTitle';
import SearchAuthor from './SearchAuthor';
import Result from './Result';
import AdvancedOptionsCheckbox from './AdvancedOptionsCheckbox';

describe('App component', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('includes component SearchTitle', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<SearchTitle />)).to.equal(true)
  });

  it('passes title to the SearchTitle', () => {
    const app = shallow(<App />);
    expect(app.find('SearchTitle').prop('title')).to.equal('')
  });

  it('includes component SearchAuthor', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<SearchAuthor />)).to.equal(true)
  });
  it('passes author to the SearchAuthor', () => {
    const app = shallow(<App />);
    expect(app.find('SearchAuthor').prop('author')).to.equal('')
  });

  it('includes component Result', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<Result />)).to.equal(true)
  });
  it('passes books to the Result', () => {
    const app = shallow(<App books={[]} />);
    expect(app.find('Result').prop('books')).to.be.an('array')
  });

  it('includes component AdvancedOptionsCheckbox', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<AdvancedOptionsCheckbox />)).to.equal(true)
  });

  it('passes areAdvancedOptionsVisible to the AdvancedOptionsCheckbox', () => {
    const app = shallow(<App />);
    expect(app.find('AdvancedOptionsCheckbox').prop('areAdvancedOptionsVisible')).to.equal(false)
  });

  it('includes input', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<input />)).to.equal(true)
  });
});

