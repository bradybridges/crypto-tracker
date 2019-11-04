import { shallow } from 'enzyme';
import React from 'react';
import Nav from './Nav';

describe('Nav', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
