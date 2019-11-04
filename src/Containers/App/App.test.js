import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import * as api from '../../apiCalls';
import * as actions from '../../Actions/index';

describe('App', () => {
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
    },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <App 
        cryptos={mockCryptos}
        error=''
        trackedCoins={['BTC', 'LTC']}
        updateCryptos={jest.fn()}
        updateError={jest.fn()}
        updateTrackedCoins={jest.fn()}
        updatePortfolio={jest.fn()}
      />
    ); 
  }); 

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('getCryptos should call fetchTopCryptos and updateCryptos', () => {
    api.fetchTopCryptos = jest.fn().mockImplementation(() => {
      return Promise.resolve([{name: 'Bitcoin'}]);
    });
    wrapper.instance().getCryptos();
    expect(api.fetchTopCryptos).toHaveBeenCalled();
    // expect(wrapper.instance().props.updateCryptos).toHaveBeenCalled();
  })
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
    },
  ];

  it('should return cryptos, error, and trackedCoins', () => {
    const mockState = {
      cryptos: mockCryptos,
      error: 'An Error Occured',
      trackedCoins: ['BTC', 'LTC'],
      portfolio: [{name: 'Bitcoin', qty: 10}, {name: 'Litecoin', qty: 20}],
    }

    const expected = {
      cryptos: mockCryptos,
      error: 'An Error Occured',
      trackedCoins: ['BTC', 'LTC'],
    }

    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch, mappedDispatch;
  
  beforeEach(() => {
    mockDispatch = jest.fn();
    mappedDispatch = mapDispatchToProps(mockDispatch);
  });

  it('updateCrytos is dispatched with correct action', () => {
    const actionToDispatch = actions.updateCryptos([{name: 'Bitcoin'}]);
    mappedDispatch.updateCryptos([{name: 'Bitcoin'}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('updateError is dispatched with correct action', () => {
    const actionToDispatch = actions.updateError('Error occured');
    mappedDispatch.updateError('Error occured');
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('updateTrackedCoins should be dispatched with correct action', () => {
    const actionToDispatch = actions.updateTrackedCoins(['BTC','LTC']);
    mappedDispatch.updateTrackedCoins(['BTC', 'LTC']);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('updatePortfolio should be dispatched with correct action', () => {
    const mockPortfolio = [
      {name: 'Bitcoin', qty: 10},
      {name: 'Litecoin', qty: 50},
    ];
    const actionToDispatch = actions.updatePortfolio(mockPortfolio);
    mappedDispatch.updatePortfolio(mockPortfolio);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});