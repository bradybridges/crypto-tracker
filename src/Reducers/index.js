import { combineReducers } from 'redux';
import { cryptos } from './cryptos';
import { error } from './error';
import { timeFrame } from './timeFrame';

export const rootReducer = combineReducers({
  cryptos,
  error,
  timeFrame,
});