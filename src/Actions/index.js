export const updateCryptos = cryptos => ({
  type: 'UPDATE_CRYPTOS',
  cryptos
});

export const updateError = error => ({
  type: 'UPDATE_ERROR',
  error,
});