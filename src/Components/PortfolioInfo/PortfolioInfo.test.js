import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import { shallow } from 'enzyme';

describe('PortfolioInfo', () => {
  let wrapper;
  const mockCoinValues = [
    {name: 'Bitcoin', value: '1321.2332'},
    {name: 'Litecoin', value: '1971.45'}
  ]
  beforeEach(() => {
    wrapper = shallow(<PortfolioInfo
      coinValues={mockCoinValues}
      total='342323.4342'
      closePortfolio={jest.fn()}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('renderCoinsValues should return an array of elements', () => {
    const result = wrapper.instance().renderCoinValues();
    const expected = [
    (
      <div>
        <p>Bitcoin</p>
        <p>$1321.23</p>
      </div>),
    (<div><p>Litecoin</p><p>$1971.45</p></div>)];
    expect(result).toEqual(expected); 
  });
});