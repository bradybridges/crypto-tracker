import { combineReducers } from 'redux';
import { cryptos } from './cryptos/cryptos';
import { error } from './error/error';
import { timeFrame } from './timeFrame/timeFrame';
import { trackedCoins } from './trackedCoins/trackedCoins';
import { portfolio } from './portfolio/portfolio.js';

export const rootReducer = combineReducers({
  cryptos,
  error,
  timeFrame,
  trackedCoins,
  portfolio,
});