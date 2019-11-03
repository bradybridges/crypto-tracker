import React from 'react';
import { shallow } from 'enzyme';
import SearchCoins from './SearchCoins';
import * as api from '../../apiCalls';

describe('SearchCoins', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchCoins />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should update state with symbol', () => {
    const mockEvent = {
      target: { value: 'btc', name: 'symbol' },
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('symbol')).toEqual('BTC');
  });

  it.skip('handleCoinSearch should update state of coin if coin is found and reset symbol', () => {
    api.searchCoin = jest.fn().mockImplementation(() => {
      return [{
        currecy: 'BTC',
        id: 'BTC',
        price: 9341.6987,
        price_date: '2019-11-02',
        symbol: 'BTC',
        circulating_supply: '18025852',
        max_supply: '21000000',
        name: 'Bitcoin',
        logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
        market_cap: '1243423423.05',
        rank: '1',
        high: '19480.90',
        high_timestamp: '2017-12-16',
      }];
    });
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({symbol: 'BTC'});
    wrapper.instance().handleCoinSearch(mockEvent);
  });
});