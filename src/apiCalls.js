import { apiKey } from './apiKey';

export const fetchTopCryptos = async () => {
  const url = 'https://api.nomics.com/v1/currencies/ticker';
  const key = `?key=${apiKey}`;
  const queries = '&ids=BTC,ETH,XRP,LTC,XMR,ETC,BCH&interval=1h,1d,30d,365d&convert=USD'
  const response = await fetch(`${url}${key}${queries}`);
  if(!response.ok) {
    throw Error('Failed to fetch coins...');
  } else {
    const coins = await response.json();
    return coins;
  }
}
