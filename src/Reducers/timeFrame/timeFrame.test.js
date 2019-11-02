import { timeFrame } from './timeFrame';
import * as actions from '../../Actions/index';

describe('timeFrame', () => {
  it('should return the update timeframe', () => {
    const result = timeFrame('1d', actions.updateTimeFrame('1h'));
    expect(result).toEqual('1h');
  });

  it('should return the default state', () => {
    const result = timeFrame('365d', {type: 'UNDEFINED'});
    expect(result).toEqual('365d');
  });
});