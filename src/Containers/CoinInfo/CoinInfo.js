import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CoinChangeInfo from '../../Components/CoinChangeInfo/CoinChangeInfo';
import { connect } from 'react-redux';
import './CoinInfo.scss';
import backButton from '../../Images/left-arrow.svg';

export const CoinInfo = (props) => {
  const { coin } = props;
  const timeFrameData = coin[props.timeFrame];
  const price = Number(coin.price).toFixed(2);
  const high = Number(coin.high).toFixed(2);
  return (
    <section id='coin-info-container'>
      <NavLink to='/' id='back-button-home'>
        <img src={backButton} alt='back button' />
      </NavLink>
      <div id='coin-title-div'>
        <h2>{coin.name}</h2>
        <img src={coin.logo_url} alt='coin logo' />
      </div>
      <div id='coin-rank-info'>
        <p className='coin-main'>Rank: #{coin.rank}</p>
        <p className='coin-main'>{coin.id}</p>
      </div>
      <div id='coin-market-info'>
        <p className='coin-p'>Price: ${price}</p>
        <p className='coin-p'>Market Cap: ${coin.market_cap}</p>
        <p className='coin-p'>High: ${high}</p>
        <p className='coin-p'>Circulating Supply: {coin.circulating_supply}</p>
        <p className='coin-p'>Max Supply: {coin.max_supply}</p>
      </div>
      <CoinChangeInfo data={timeFrameData} timeFrame={props.timeFrame}/>
    </section>
  );
}

export const mapStateToProps = state => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps)(CoinInfo);

CoinInfo.propTypes = {
  coin: PropTypes.object.isRequired,
  timeFrame: PropTypes.string.isRequired,
};
