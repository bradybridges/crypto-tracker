import React, { Component } from 'react';
import './CoinCard.scss';
import { connect } from 'react-redux';
import { updateTrackedCoins } from '../../Actions/index';

class CoinCard extends Component {

  trackCoin = () => {
    const updatedSymbols = [...this.props.trackedCoins, this.props.coin.id];
    this.props.updateTrackedCoins(updatedSymbols);
    this.props.getCryptos(updatedSymbols);
    localStorage.setItem('trackedCoins', JSON.stringify(updatedSymbols));
  }

  render() {
    const {name, logo, price, circulatingSupply} = this.props;
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
        <button onClick={this.trackCoin}>Track Coin</button>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTrackedCoins: symbols => dispatch( updateTrackedCoins(symbols) ),
});

const mapStateToProps = state => ({
  trackedCoins: state.trackedCoins,
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinCard);