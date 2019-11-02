import { portfolio } from './portfolio';
import * as actions from '../../Actions/index';

describe('portfolio', () => {
  const mockPortfolio = [
    { name: 'Bitcoin', qty: 10 },
    { name: 'Litecoin', qty: 5 },
  ];
  
  it('should return the updated portfolio', () => {
    const result = portfolio([], actions.updatePortfolio(mockPortfolio));
    expect(result).toEqual(mockPortfolio);
  });

  it('should return the default state', () => {
    const result = portfolio(mockPortfolio, {type: 'UNDEFINED'});
    expect(result).toEqual(mockPortfolio);
  });
});