import React from 'react';
import { shallow } from 'enzyme';
import { CryptoCard, mapStateToProps } from './CryptoCard';

describe('CryptoCard', () => {
  const wrapper = shallow(<CryptoCard price="1001.83" percentChange="-0.1345" name="Bitcoin" />);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return timeFrame', () => {
    const mockState = {
      timeFrame: '1d',
      error: 'There was an error',
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual({ timeFrame: '1d' });
  });
});
