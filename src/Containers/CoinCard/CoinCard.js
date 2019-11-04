import React, { Component } from 'react';
import './CoinCard.scss';
import { connect } from 'react-redux';
import { updateTrackedCoins, updateCryptos } from '../../Actions/index';

export class CoinCard extends Component {

  trackCoin = (e) => {
    e.preventDefault();
    const updatedSymbols = [...this.props.trackedCoins, this.props.coin.id];
    this.props.updateTrackedCoins(updatedSymbols);
    this.props.getCryptos(updatedSymbols);
    localStorage.setItem('trackedCoins', JSON.stringify(updatedSymbols));
  }

  stopTrackingCoin = (e) => {
    e.preventDefault();
    const index = this.props.cryptos.findIndex(coin => coin.name === this.props.name);
    let updatedCryptos = this.props.cryptos.map(crypto => crypto);
    updatedCryptos.splice(index, 1);
    this.props.updateCryptos(updatedCryptos);
    const updatedSymbols = updatedCryptos.map( coin => coin.id);
    this.props.updateTrackedCoins(updatedSymbols);
    localStorage.setItem('trackedCoins', JSON.stringify(updatedSymbols));
  }

  render() {
    const {name, logo, price, circulatingSupply} = this.props;
    const isCoinTracked = this.props.cryptos.find(coin => coin.name === name);
    return (
      <section id='coin-card-section'>
        <h1>{name}</h1>
        <img src={logo} alt='coin logo' />
        <table>
          <tbody>
            <tr>
              <td>Price</td>
              <td>${Number(price).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Circulation</td>
              <td>{circulatingSupply}</td>
            </tr>
          </tbody>
        </table>
        {!isCoinTracked && <button onClick={this.trackCoin}>Track Coin</button>}
        {isCoinTracked && <button onClick={this.stopTrackingCoin}>Stop Tracking Coin</button>}
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateTrackedCoins: symbols => dispatch( updateTrackedCoins(symbols) ),
  updateCryptos: coins => dispatch( updateCryptos(coins) ),
});

export const mapStateToProps = state => ({
  trackedCoins: state.trackedCoins,
  cryptos: state.cryptos,
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);