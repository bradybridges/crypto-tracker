import React from 'react';
import { shallow } from 'enzyme';
import { QuantityInput, mapDispatchToProps, mapStateToProps } from './QuantityInput';
import { updatePortfolio } from '../../Actions/index';

describe('QuantityInput', () => {
  let wrapper;
  let mockCoin;
  const mockUpdatePortfolio = jest.fn();
  const mockPortfolio = [{name: 'Bitcoin', qty: 1}, {name: 'Litecoin', qty: 0}]
  beforeEach(() => {
    mockCoin = {
      name: 'Bitcoin',
    };
    wrapper = shallow(<QuantityInput updatePortfolio={mockUpdatePortfolio} portfolio={mockPortfolio} coin={mockCoin} qty={5} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state default properties of name and qty', () => {
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('qty')).toEqual('');
  });

  it('handleChange should updateState and call updatePortfolio, should update portfolio if coin exists', () =>{ 
     wrapper.instance().updatePortfolio = jest.fn();
     const mockEvent = {
       target: { value: '10' }
     };
     wrapper.instance().handleChange(mockEvent);
     expect(wrapper.state('name')).toEqual('Bitcoin');
     expect(wrapper.state('qty')).toEqual(10);
     expect(wrapper.instance().updatePortfolio).toHaveBeenCalledWith('Bitcoin', 10, 0);
  });

  it('handleChange should not call updatePortfolio if qty is 0', () => {
    wrapper.instance().updatePortfolio = jest.fn();
    const mockEvent = {
      target: {value: '0'},
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('qty')).toEqual('');
    expect(wrapper.instance().updatePortfolio).not.toHaveBeenCalled();
  });

  it('updatePortfolio should update coin if it already exists', () => {
    const expectedPortfolio = [{name: "Bitcoin", qty: 20}, {name: "Litecoin", qty: 0}];
    wrapper.instance().updatePortfolio('Bitcoin', 20, 0);
    expect(wrapper.instance().props.updatePortfolio).toHaveBeenCalledWith(expectedPortfolio);
  });

  it('updatePortfolio should add new coin if it does not exist', () =>{
    const expectedPortfolio = [{name: "Bitcoin", qty: 1}, {name: "Litecoin", qty: 0}, {name: 'Ripple', qty: 3}];
    wrapper.instance().updatePortfolio('Ripple', 3, -1);
    expect(wrapper.instance().props.updatePortfolio).toHaveBeenCalledWith(expectedPortfolio);
  });

  it.skip('when quantity input changes handleChange should be called', () => {
    const mockEvent = {
      target: {value: '10'}
    };
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.qty-input').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  it('should map updatePortfolio to props', () => {
    const mockDispatch = jest.fn();
    const mockPortfolio = [
      {name: 'Bitcoin', qty: 1},
      {name: 'Litecoin', qty: 2}
    ];
    const actionToDispatch = updatePortfolio(mockPortfolio);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updatePortfolio(mockPortfolio);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('mapStateToProps', () => {
  it('should return portfolio obj', () => {
    const mockState = {
      portfolio: [{name: 'Bitcoin', qty: 1}, {name: 'Litecoin', qty: 3}],
      trackedCoins: ['BTC','LTC'],
    };

    const expected = {
      portfolio: [{name: 'Bitcoin', qty: 1}, {name: 'Litecoin', qty: 3}]
    };

    const mappedState = mapStateToProps(mockState);
    expect(mappedState).toEqual(expected);
  });
});
