import { cryptos } from './cryptos';
import * as actions from '../../Actions/index';

describe('cryptos', () => {
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
      price: 9341.6987,
      price_date: '2019-11-02',
      symbol: 'LTC',
      circulating_supply: '18000000',
      max_supply: '21000000',
      name: 'Litecoin',
      logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg',
      market_cap: '120000000.05',
      rank: '3',
      high: '420.90',
      high_timestamp: '2017-12-10',
    },
  ];

  it('UPDATE_CRYPTOS should return updated cryptos', () => {
    const result = cryptos([], actions.updateCryptos(mockCryptos));
    expect(result).toEqual(mockCryptos);
  });

  it('should return the default state', () => {
    const result = cryptos(mockCryptos, {type: 'NOT_DEFINED'});
    expect(result).toEqual(mockCryptos);
  })
});