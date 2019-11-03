import React from 'react';
import { NavLink } from 'react-router-dom';
import CoinChangeInfo from '../CoinChangeInfo/CoinChangeInfo';
import { connect } from 'react-redux';
import './CoinInfo.scss';

export const CoinInfo = (props) => {
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

export const mapStateToProps = state => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps)(CoinInfo);
