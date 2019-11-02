export const portfolio = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_PORTFOLIO':
      return action.portfolio;
    default:
      return state;
  }
}