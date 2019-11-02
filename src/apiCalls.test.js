import { fetchTopCryptos, searchCoin} from './apiCalls';

describe('fetchTopCryptos', () => {
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
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCryptos),
      });
    });
  });

  it('should be fetched with the correct url', () => {
    const expectedUrl = 'https://api.nomics.com/v1/currencies/ticker?key=fe1a57f1ee6fc9e5cee469c99171d44f&ids=BTC,LTC&interval=1h,1d,30d,365d&convert=USD';
    fetchTopCryptos(['BTC','LTC']);
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return an array of cryptos', () => {
    const result = fetchTopCryptos(['BTC','LTC']);
    expect(result).resolves.toEqual(mockCryptos);
  })

  it('should return an error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ok: false});
    });
    const result = fetchTopCryptos(['BTC', 'LTC']);
    expect(result).rejects.toEqual(Error('Failed to fetch coins...'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });

    const result = fetchTopCryptos(['BTC','LTC']);
    expect(result).rejects.toEqual(Error('Failed to fetch'));
  });
});

describe('searchCoin', () => {
  const mockCoin = {
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
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCoin),
      });
    });
  });

  it('should be called with the correct url', () => {
    searchCoin('BTC');
    expect(window.fetch).toHaveBeenCalledWith('https://api.nomics.com/v1/currencies/ticker?key=fe1a57f1ee6fc9e5cee469c99171d44f&ids=BTC&interval=1h,1d,30d,365d&convert=USD');
  });

  it('should return a coin if it\'s found', () => {
    const result = searchCoin('BTC');
    expect(result).resolves.toEqual(mockCoin);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ok: false});
    });

    const result = searchCoin('ZZZ');
    expect(result).rejects.toEqual(Error('Coin not found...'));
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to fetch'));
    });
    const result = searchCoin('BTC');
    expect(result).rejects.toEqual(Error('Failed to fetch'));
  });
});