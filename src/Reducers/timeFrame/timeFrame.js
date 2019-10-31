export const timeFrame = (state = '1d', action) => {
  switch(action.type) {
    case 'UPDATE_TIME_FRAME':
      return action.timeFrame;
    default:
      return state;
  }
}