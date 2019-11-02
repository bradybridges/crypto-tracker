import React from 'react';
import { NavLink } from 'react-router-dom';
import CoinChangeInfo from '../CoinChangeInfo/CoinChangeInfo';
import { connect } from 'react-redux';
import './CoinInfo.scss';

const CoinInfo = (props) => {
  const { coin } = props;
  const timeFrameData = coin[props.timeFrame];
  return (
    <section>
      <h2>{coin.name}</h2>
      <img src={coin.logo_url} alt='coin logo' />
      <p>{coin.rank}</p>
      <h2>{coin.id}</h2>
      <p>{coin.price}</p>
      <p>{coin.high}</p>
      <p>{coin.circulating_supply}</p>
      <p>{coin.max_supply}</p>
      <p>${coin.market_cap}</p>
      <CoinChangeInfo data={timeFrameData} timeFrame={props.timeFrame}/>
    </section>
  );
}

const mapStateToProps = state => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps)(CoinInfo);

// currency(pin):"BTC"
// id(pin):"BTC"
// price(pin):"9248.95427101"
// price_date(pin):"2019-11-02"
// symbol(pin):"BTC"
// circulating_supply(pin):"18025025"
// max_supply(pin):"21000000"
// name(pin):"Bitcoin"
// logo_url(pin):"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
// market_cap(pin):"166712631958.79"
// rank(pin):"1"
// high(pin):"19408.82122873"
// high_timestamp(pin):"2017-12-16"