import {
  updateCryptos,
  updateError,
  updateTimeFrame,
  updateTrackedCoins,
  updatePortfolio,
} from './index';

describe('updateCryptos', () => {
  const mockCryptos = [
    {
      id: 'BTC', symbol: 'BTC', price: 9000, rank: 1,
    },
    {
      id: 'LTC', symbol: 'LTC', price: 100, rank: 3,
    },
  ];

  it('should return an action object', () => {
    const result = updateCryptos(mockCryptos);
    const expected = {
      type: 'UPDATE_CRYPTOS',
      cryptos: mockCryptos,
    };
    expect(result).toEqual(expected);
  });
});

describe('updateError', () => {
  const expected = {
    type: 'UPDATE_ERROR',
    error: 'Failed to fetch...',
  };

  it('should return an action object', () => {
    const result = updateError('Failed to fetch...');
    expect(result).toEqual(expected);
  });
});

describe('updateTimeFrame', () => {
  const expected = {
    type: 'UPDATE_TIME_FRAME',
    timeFrame: '1h',
  };

  it('should return an action object', () => {
    const result = updateTimeFrame('1h');
    expect(result).toEqual(expected);
  });
});

describe('updateTrackedCoins', () => {
  const expected = {
    type: 'UPDATE_TRACKED_COINS',
    symbols: ['BTC', 'LTC', 'BCH'],
  };

  it('should return an action object', () => {
    const result = updateTrackedCoins(['BTC', 'LTC', 'BCH']);
    expect(result).toEqual(expected);
  });
});

describe('updatePortfolio', () => {
  const mockPortfolio = [
    { name: 'Bitcoin', qty: 10 },
    { name: 'Litecoin', qty: 5 },
  ];
  const expected = {
    type: 'UPDATE_PORTFOLIO',
    portfolio: mockPortfolio,
  };

  it('should return an action object', () => {
    const result = updatePortfolio(mockPortfolio);
    expect(result).toEqual(expected);
  });
});
