import { combineReducers } from 'redux';
import { cryptos } from './cryptos';
import { error } from './error';

export const rootReducer = combineReducers({
  cryptos,
  error,
});