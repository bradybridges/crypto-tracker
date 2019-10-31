import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoCard from '../../Components/CryptoCard/CryptoCard';


class CryptoContainer extends Component {

  renderCryptos = () => {
    return this.props.cryptos.map(crypto => {
      const timeFrame = this.props.timeFrame;
      const percentChange = crypto[timeFrame].price_change_pct;
      return (
        <CryptoCard 
          rank={crypto.rank} 
          price={crypto.price} 
          percentChange={percentChange}
          name={crypto.name} 
          logo={crypto.logo_url}
          key={crypto.id}
        />
      );
    });
  }

  render() {
    return (
      <section>
        {this.renderCryptos()}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  timeFrame: state.timeFrame,
})

export default connect(mapStateToProps)(CryptoContainer);