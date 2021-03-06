import React from 'react';
import { shallow } from 'enzyme';
import { Portfolio, mapDispatchToProps, mapStateToProps } from './Portfolio';
import { updatePortfolio } from '../../Actions/index';

describe('Portfolio', () => {
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

  const mockPortfolio = [{name: 'Bitcoin', qty: 10}, {name: 'Litecoin', qty: 3}];
  beforeEach(() => {
    wrapper = shallow(<Portfolio cryptos={mockCryptos} portfolio={mockPortfolio} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return cryptos and portfolio', () => {
    const mockState = {
      cryptos: mockCryptos,
      portfolio: mockPortfolio,
      error: 'There was an error',
    };
    const expected = {
      cryptos: mockCryptos,
      portfolio: mockPortfolio,
    };
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });

  it('updatePortfolio should dispatch updatePortfolio(portfolio)', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = updatePortfolio(mockPortfolio);
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.updatePortfolio(mockPortfolio);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it.skip('when view value is clicked showPortfolio is called', () => {
    wrapper.instance().showPortfolio = jest.fn();
    const test = wrapper.find('#view-value-btn');
    expect(test.length).toEqual(1);
    test.simulate('click');
    expect(wrapper.instance().showPortfolio).toHaveBeenCalled();
  });

  it('calculatePortfolioValue should return total value', () => {
    const result = wrapper.instance().calculatePortfolioValue();
    expect(result).toEqual('93643.64');
  });

  it('calculateIndividualCoinValues should return an array of coin values', () => {
    const result = wrapper.instance().calculateIndividualCoinValues();
    const expected = [
      { name: 'Bitcoin', value: 93416.98700000001 },
      { name: 'Litecoin', value: 226.64999999999998 },
    ];
    expect(result).toEqual(expected);
  });

  it('showPortfolio should set state of total, coinValues, and showPortfolio', () => {
    wrapper.instance().showPortfolio();
    const expectedState = {
      showPortfolio: true,
      total: '93643.64',
      coinValues: [
        { name: 'Bitcoin', value: 93416.98700000001 },
        { name: 'Litecoin', value: 226.64999999999998 },
      ]
    };
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('close portfolio should reset state', () => {
    wrapper.instance().closePortfolio();
    const expectedState = {
      showPortfolio: false,
      total: 0,
      coinValues: [],
    };
    expect(wrapper.state()).toEqual(expectedState);
  });
});
