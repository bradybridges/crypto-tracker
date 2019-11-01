import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoCard from '../../Components/CryptoCard/CryptoCard';
import './CryptoContainer.scss';
import { withRouter } from 'react-router-dom';

class CryptoContainer extends Component {

  renderCryptos = () => {
    return this.props.cryptos.map(crypto => {
      const timeFrame = this.props.timeFrame;
      const percentChange = crypto[timeFrame].price_change_pct;
      return (
        <CryptoCard 
          price={crypto.price} 
          percentChange={percentChange}
          name={crypto.name} 
          key={crypto.id}
        />
      );
    });
  }

  render() {
    return (
      <section id='crypto-container'>
        {this.renderCryptos()}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  timeFrame: state.timeFrame,
})

export default withRouter(connect(mapStateToProps)(CryptoContainer));