export const trackedCoins = (state = ['BTC','BCH','ETH','LTC'], action) => {
  switch(action.type) {
    case 'UPDATE_TRACKED_COINS':
      return action.symbols;
    default:
      return state;
  }
}