import React from 'react';
import { shallow } from 'enzyme';
import { CoinCard, mapStateToProps, mapDispatchToProps } from './CoinCard';
import * as actions from '../../Actions/index';

describe('CoinCard', () => {
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
  const mockTrackedCoins = ['BTC', 'LTC'];
  const mockUpdateTrackedCoins = jest.fn();
  const mockUpdateCryptos = jest.fn();
  const mockPortfolio = [{ name: 'Bitcoin', qty: 10}, {name: 'Litecoin', qty: 5 }];
  const wrapper = shallow(<CoinCard
    coin={{ id: 'XMR' }}
    name="Monero"
    logo="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xmr.svg"
    price="1003.432342"
    circulatingSupply="123123413"
    cryptos={mockCryptos}
    trackedCoins={mockTrackedCoins}
    updateTrackedCoins={mockUpdateTrackedCoins}
    getCryptos={mockUpdateCryptos}
    updateCryptos={jest.fn()}
    updatePortfolio={jest.fn()}
    portfolio={mockPortfolio}
  />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('trackDoin should call updateTrackedCoins & getCryptos', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    };
    const expected = ['BTC','LTC','XMR']
    wrapper.instance().trackCoin(mockEvent);
    expect(wrapper.instance().props.updateTrackedCoins).toHaveBeenCalledWith(expected);
    expect(wrapper.instance().props.getCryptos).toHaveBeenCalledWith(expected);
  });

  it('stopTrackingCoin should remove coin from cryptos and trackedcoins', () => {
    const mockPortfolio = [{ name: 'Bitcoin', qty: 10 }, { name: 'Litecoin', qty: 5 }];
    const wrapper2 = shallow(<CoinCard
      coin={{ id: 'BTC' }}
      name="Bitcoin"
      logo="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
      price="1003.432342"
      circulatingSupply="123123413"
      cryptos={mockCryptos}
      trackedCoins={mockTrackedCoins}
      updateTrackedCoins={mockUpdateTrackedCoins}
      updateCryptos={mockUpdateCryptos}
      portfolio={mockPortfolio}
      updatePortfolio={jest.fn()}
    />);
    const expectedCryptos = [
      {
        circulating_supply: '18000000',
        currecy: 'LTC',
        high: '420.90',
        high_timestamp: '2017-12-10',
        id: 'LTC',
        logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg',
        market_cap: '1003423423.05',
        max_supply: '20000000',
        name: 'Litecoin',
        price: 75.55,
        price_date: '2019-11-02',
        rank: '3',
        symbol: 'LTC',
      },
    ];
    wrapper2.instance().props.updateCryptos.mockClear();
    wrapper2.instance().props.updateTrackedCoins.mockClear();
    wrapper2.instance().stopTrackingCoin({ preventDefault: jest.fn() });
    expect(wrapper2.instance().props.updateCryptos).toHaveBeenCalledWith(expectedCryptos);
    expect(wrapper2.instance().props.updateTrackedCoins).toHaveBeenCalledWith(['LTC']);
  });
}); 

describe('mapStateToProps', () => {
  it('should return trackedCoins and cryptos', () => {
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
    const mockTrackedCoins = ['BTC', 'LTC'];
    const mockState = {
      cryptos: mockCryptos,
      trackedCoins: mockTrackedCoins,
      error: 'There was an error',
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual({ cryptos: mockCryptos, trackedCoins: mockTrackedCoins });
  });
});

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn();
  const mockTrackedCoins = ['BTC', 'LTC'];
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
  const trackedCoinsAction = actions.updateTrackedCoins(mockTrackedCoins);
  const cryptosAction = actions.updateCryptos(mockCryptos);
  const mappedDispatch = mapDispatchToProps(mockDispatch);
  mappedDispatch.updateTrackedCoins(mockTrackedCoins);
  expect(mockDispatch).toHaveBeenCalledWith(trackedCoinsAction);
  mappedDispatch.updateCryptos(mockCryptos);
  expect(mockDispatch).toHaveBeenCalledWith(cryptosAction);
});
