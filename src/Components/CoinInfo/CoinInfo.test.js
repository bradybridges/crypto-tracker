import React from 'react';
import { shallow } from 'enzyme';
import { CoinInfo, mapStateToProps } from './CoinInfo';

describe('CoinInfo', () => {
  const mockCoin = {
    name: 'Bitcoin',
    logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
    rank: '1',
    id: 'BTC',
    price: '9393.23',
    high: '19567.43',
    circulating_supply: '12314534',
    max_supply: '200000000',
    market_cap: '234453454.34',
    '1d': {
      price_change: '231.34',
    }
  }
  const wrapper = shallow(<CoinInfo coin={mockCoin} timeFrame='1d' />)

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return timeFrame', () => {
    const mockState = {
      timeFrame: '1d',
      error: 'An error occured',
    };
    const expected = { timeFrame: '1d' };
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});