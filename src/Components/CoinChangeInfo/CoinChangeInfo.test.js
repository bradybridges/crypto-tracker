import React from 'react';
import { shallow } from 'enzyme';
import CoinChangeInfo from './CoinChangeInfo';

describe('CoinChangeInfo', () => {
  let wrapper;
  const mockData = {
    price_change: 300.05,
    price_change_pct: 4.23,
    volume_change: 10000,
    volume_change_pct: 10.3,
    market_cap_change: -425232,
    market_cap_change_pct: -1.1,
  };
  beforeEach(() => {
    wrapper = shallow(<CoinChangeInfo data={mockData} timeFrame="1d" />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
