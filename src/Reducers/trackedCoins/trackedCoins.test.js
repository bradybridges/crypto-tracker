import { trackedCoins } from './trackedCoins';
import * as actions from '../../Actions/index';

describe('trackedCoins', () => {
  const expected = ['BTC','LTC','BCH','XRP'];
  it('should return updated coins being tracked', () => {
    const result = trackedCoins([], actions.updateTrackedCoins(expected));
    expect(result).toEqual(expected);
  });

  it('should return the default state', () => {
    const result = trackedCoins(expected, {type: 'UNDEFINED'});
    expect(result).toEqual(expected);
  });
});