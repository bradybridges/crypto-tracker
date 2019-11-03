import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import * as api from '../../apiCalls';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />); 
  }); 
  it('test', () => {
    expect(true).toEqual(true);
  })
});