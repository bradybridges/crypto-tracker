export const cryptos = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_CRYPTOS':
      return action.cryptos;
    default:
      return state;
  };
};