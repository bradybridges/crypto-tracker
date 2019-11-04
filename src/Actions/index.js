export const updateCryptos = (cryptos) => ({
  type: 'UPDATE_CRYPTOS',
  cryptos,
});

export const updateError = (error) => ({
  type: 'UPDATE_ERROR',
  error,
});

export const updateTimeFrame = (timeFrame) => ({
  type: 'UPDATE_TIME_FRAME',
  timeFrame,
});

export const updateTrackedCoins = (symbols) => ({
  type: 'UPDATE_TRACKED_COINS',
  symbols,
});

export const updatePortfolio = (portfolio) => ({
  type: 'UPDATE_PORTFOLIO',
  portfolio,
});
