import { error } from './error';
import * as actions from '../../Actions/index';

describe('error', () => {
  
  it('should return the updated error', () => {
    const expected = 'Failed to fetch coins...';
    const result = error('', actions.updateError('Failed to fetch coins...'));
    expect(result).toEqual(expected);
  });

  it('should return the default state', () => {
    const result = error('there was an error', {type: 'UNDEFINED'});
    expect(result).toEqual('there was an error');
  });
});