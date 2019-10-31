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


//// currency(pin):"BTC"
// id(pin):"BTC"
// price(pin):"9121.21945681"
// price_date(pin):"2019-10-31"
// symbol(pin):"BTC"
// circulating_supply(pin):"18021650"
// max_supply(pin):"21000000"
// name(pin):"Bitcoin"
// logo_url(pin):"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
// market_cap(pin):"164379424623.89"
// rank(pin):"1"
// high(pin):"19408.82122873"
// high_timestamp(pin):"2017-12-16"