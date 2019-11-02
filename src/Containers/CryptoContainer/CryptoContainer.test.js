import React from 'react';
import { shallow } from 'enzyme';
import { CryptoContainer, mapStateToProps } from './CryptoContainer';

describe('CryptoContainer', () => {
  let wrapper;
  const mockCryptos = [
    {
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
      '1d': { 
        price_change_pct: 1.4,
      }
    },
    {
      currecy: 'LTC',
      id: 'LTC',
      price: 75.55,
      price_date: '2019-11-02',
      symbol: 'LTC',
      circulating_supply: '18000000',
      max_supply: '20000000',
      name: 'Litecoin',
      logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg',
      market_cap: '1003423423.05',
      rank: '3',
      high: '420.90',
      high_timestamp: '2017-12-10',
      '1d': { 
        price_change_pct: 2.4,
      }
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<CryptoContainer cryptos={mockCryptos} timeFrame='1d' />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renderCryptos should return array of crypto cards', () => {
    const result = wrapper.instance().renderCryptos();
    expect(result.length).toEqual(2);  
  });
}); 

describe('mapStateToProps', () => {
  const mockCryptos = [
    {
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
      '1d': { 
        price_change_pct: 1.4,
      }
    },
    {
      currecy: 'LTC',
      id: 'LTC',
      price: 75.55,
      price_date: '2019-11-02',
      symbol: 'LTC',
      circulating_supply: '18000000',
      max_supply: '20000000',
      name: 'Litecoin',
      logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg',
      market_cap: '1003423423.05',
      rank: '3',
      high: '420.90',
      high_timestamp: '2017-12-10',
      '1d': { 
        price_change_pct: 2.4,
      }
    },
  ];

  it('should return cryptos and timeFrame', () => {
    const mockState = {
      cryptos: mockCryptos,
      timeFrame: '1d',
      error: 'An error occured',
    };
    const expected = {
      cryptos: mockCryptos,
      timeFrame: '1d',
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});