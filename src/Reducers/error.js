export const error = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_ERROR':
      return action.error;
    default:
      return state;
  }
}