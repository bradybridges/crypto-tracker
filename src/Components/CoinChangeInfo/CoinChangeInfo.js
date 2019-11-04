import React from 'react';
import PropTypes from 'prop-types';
import './CoinChangeInfo.scss';
import upArrow from '../../Images/up-arrow.png';
import downArrow from '../../Images/down-arrow.png';

const CoinChangeInfo = ({ data, timeFrame }) => {
  const priceImg = data.price_change > 0 ? upArrow : downArrow;
  const volumeImg = data.volume_change > 0 ? upArrow : downArrow;
  const marketImg = data.market_cap_change > 0 ? upArrow : downArrow;
  const priceChange = Number(data.price_change).toFixed(2);
  const priceChangePct = (Number(data.price_change_pct) * 100).toFixed(2);
  const volChange = Number(data.volume_change).toFixed(2);
  const volChangePct = (Number(data.volume_change_pct) * 100).toFixed(2);
  const marketChange = Number(data.market_cap_change).toFixed(2);
  const marketChangePct = (Number(data.market_cap_change_pct) * 100).toFixed(2);

  return (
    <section id="coin-change-info-container">
      <h2>
        Change in
        {timeFrame}
      </h2>
      <div className="info-container">
        <p>Price</p>
        <p>
          $
          {priceChange}
        </p>
        <p>
          %
          {priceChangePct}
        </p>
        <img src={priceImg} alt="price indicator" />
      </div>
      <div className="info-container">
        <p>Volume</p>
        <p>{volChange}</p>
        <p>
          %
          {volChangePct}
        </p>
        <img src={volumeImg} alt="volume indicator" />
      </div>
      <div className="info-container">
        <p>Market Cap</p>
        <p>
          $
          {marketChange}
        </p>
        <p>
          $
          {marketChangePct}
        </p>
        <img src={marketImg} alt="market indicator" />
      </div>
    </section>
  );
}

export default CoinChangeInfo;

CoinChangeInfo.propTypes = {
  data: PropTypes.object.isRequired,
  timeFrame: PropTypes.string.isRequired,
};
