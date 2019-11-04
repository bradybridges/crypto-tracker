import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePortfolio } from '../../Actions/index';
import QuantityInput from '../QuantityInput/QuantityInput';
import PortfolioInfo from '../../Components/PortfolioInfo/PortfolioInfo';
import './Portfolio.scss';

export class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      showPortfolio: false,
      total: 0,
      coinValues: [],
    };
  }

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

  calculatePortfolioValue = () => {
    const totalValue = this.props.portfolio.reduce((total, currentCoin) => {
      const currentCoinData = this.props.cryptos.find(coin => coin.name === currentCoin.name);
      const currentPrice = currentCoinData.price;
      const value = currentPrice * currentCoin.qty;
      return total += value;
    }, 0);
    return totalValue.toFixed(2);
  }

  calculateIndividualCoinValues = () => {
    const coinValues = this.props.portfolio.reduce((portfolioInfo, currentCoin) => {
      const currentCoinInfo = this.props.cryptos.find(coin => coin.name === currentCoin.name);
      const value = currentCoinInfo.price * currentCoin.qty;
      portfolioInfo.push({ name: currentCoin.name, value });
      return portfolioInfo;
    }, []);
    return coinValues;
  }

  showPortfolio = () => {
    const totalValue = this.calculatePortfolioValue();
    const individualCoinValues = this.calculateIndividualCoinValues();
    this.setState(
      { 
        total: totalValue, 
        coinValues: individualCoinValues,
        showPortfolio: true, 
      }
    );
  }

  closePortfolio = () => {
    this.setState({ showPortfolio: false, total: 0, coinValues: [] });
  }

  render() {
    return (
      <section id='portfolio-container'>
        <h2>Portfolio</h2>
        {this.renderInputs()}
        <button id='view-value-btn' onClick={this.showPortfolio}>View Value</button>
        {this.state.showPortfolio && <PortfolioInfo 
          total={this.state.total} 
          coinValues={this.state.coinValues} 
          closePortfolio={this.closePortfolio}
          />
        }
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