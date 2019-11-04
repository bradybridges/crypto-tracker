import { apiKey } from './apiKey';

export const fetchTopCryptos = async (symbols) => {
  const ids = symbols.join();
  const url = 'https://api.nomics.com/v1/currencies/ticker';
  const key = `?key=${apiKey}`;
  const queries = `&ids=${ids}&interval=1h,1d,30d,365d&convert=USD`;
  const response = await fetch(`${url}${key}${queries}`);
  if (!response.ok) {
    throw Error('Failed to fetch coins...');
  } else {
    const coins = await response.json();
    return coins;
  }
};

export const searchCoin = async (symbol) => {
  const url = 'https://api.nomics.com/v1/currencies/ticker';
  const key = `?key=${apiKey}`;
  const queries = `&ids=${symbol}&interval=1h,1d,30d,365d&convert=USD`;
  const response = await fetch(`${url}${key}${queries}`);
  if (!response.ok) {
    throw Error('Coin not found...');
  } else {
    const coin = await response.json();
    return coin;
  }
};
