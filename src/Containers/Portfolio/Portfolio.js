import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePortfolio } from '../../Actions/index';
import QuantityInput from '../QuantityInput/QuantityInput';
import './Portfolio.scss';

export class Portfolio extends Component {
  renderInputs = () => {
    const coinInputs = this.props.cryptos.map( coin => {
      const existingCoin = this.props.portfolio.find( crypto => crypto.name === coin.name);
      const qty = existingCoin ? existingCoin.qty : 0;
      return (
        <QuantityInput key={coin.id} coin={coin} qty={qty} />
      );
    });
    return coinInputs;
  }

  render() {
    return (
      <section id='portfolio-container'>
        <h2>Portfolio</h2>
        {this.renderInputs()}
        <button id='view-value-btn'>View Value</button>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  cryptos: state.cryptos,
  portfolio: state.portfolio,
});

export const mapDispatchToProps = dispatch => ({
  updatePortfolio: portfolio => dispatch( updatePortfolio(portfolio) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);