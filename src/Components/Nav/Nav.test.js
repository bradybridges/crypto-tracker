import Nav from './Nav';
import { shallow } from 'enzyme';
import React from 'react';

describe('Nav', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});