import React from 'react';
import './CoinChangeInfo.scss';
import upArrow from '../../Images/up-arrow.png';
import downArrow from '../../Images/down-arrow.png';

const CoinChangeInfo = ({data, timeFrame}) => {
  const priceImg = data.price_change > 0 ? upArrow : downArrow;
  const volumeImg = data.volume_change > 0 ? upArrow : downArrow;
  const marketImg = data.market_cap_change > 0 ? upArrow : downArrow;
  return (
    <section>
      <h2>Change in {timeFrame}</h2>
      <div className='info-container'>
        <p>Price</p>
        <p>{data.price_change}</p>
        <p>{data.price_change_pct}</p>
        <img src={priceImg} alt='price indicator' />
      </div>
      <div className='info-container'>
        <p>Volume</p>
        <p>{data.volume_change}</p>
        <p>{data.volume_change_pct}</p>
        <img src={volumeImg} alt='volume indicator' />
      </div>
      <div className='info-container'>
        <p>Market Cap</p>
        <p>{data.market_cap_change}</p>
        <p>{data.market_cap_change_pct}</p>
        <img src={marketImg} alt='market indicator' />
      </div>
    </section>
  );
}

export default CoinChangeInfo;

// price_change(pin):"-12.28743296"
// price_change_pct(pin):"-0.00132892"
// volume(pin):"475886050.61"
// volume_change(pin):"-42733991.88"
// volume_change_pct(pin):"-0.08"
// market_cap_change(pin):"-221018977.59"
// market_cap_change_pct(pin):"-0.00"
// volume_transparency_grade(pin):"A"