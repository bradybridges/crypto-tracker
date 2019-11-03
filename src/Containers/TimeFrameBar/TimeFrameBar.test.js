import React from 'react';
import { shallow } from 'enzyme';
import { updateTimeFrame } from '../../Actions/index';
import { TimeFrameBar, mapStateToProps, mapDispatchToProps } from './TimeFrameBar'; 

describe('TimeFrameBar', () => {
  let wrapper;
  const mockUpdateTimeFrame = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<TimeFrameBar updateTimeFrame={mockUpdateTimeFrame} />);
  })
  it('should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  });

  it('handle click should call updateTimeFrame', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {id: '365d'},
    }
    wrapper.instance().handleClick(mockEvent);
    expect(wrapper.instance().props.updateTimeFrame).toHaveBeenCalledWith('365d');
  });

  it('when a time frame button is clicked it should run handleClick', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {id: '1d'}
    }
    wrapper.instance().props.updateTimeFrame.mockClear();
    wrapper.find('td').at(1).simulate('click', mockEvent);
    expect(wrapper.instance().props.updateTimeFrame).toHaveBeenCalledWith('1d');
  });
});

describe('mapDispatchToProps', () => {
  it('should return updateTimeFrame and dispatch the method properly', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = updateTimeFrame('365d');
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.updateTimeFrame('365d');
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('mapStateToProps', () => {
  it('should map timeFrame to props', () => {
    const mockState = {
      timeFrame: '365d',
      error: 'An error occured',
    }
    const expectedState = {timeFrame: '365d'};
    const mappedState = mapStateToProps(mockState);
    expect(mappedState).toEqual(expectedState);
  });
});