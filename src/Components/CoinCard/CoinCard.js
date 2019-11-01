import React from 'react';
import './CoinCard.scss';

const CoinCard = ({name, rank, logo, price}) => {
  return (
    <section>
      <h1>{name}</h1>
      <p>Rank: {rank}</p>
      <img src={logo} alt='coin logo' />
      <p>${Number(price).toFixed(2)}</p>
      <button>Track Coin</button>
    </section>
  );
}

export default CoinCard;

// 1d: {price_change: "-10.35376944", price_change_pct: "-0.00113751", volume: "16486354356.23", volume_change: "-1060914704.34", volume_change_pct: "-0.06", …}
// 1h: {price_change: "-37.12686146", price_change_pct: "-0.00406694", volume: "542724905.47", volume_change: "-20801737.02", volume_change_pct: "-0.04", …}
// 30d: {price_change: "778.71412728", price_change_pct: "0.09367306", volume: "396040290759.14", volume_change: "54556791262.92", volume_change_pct: "0.16", …}
// 365d: {price_change: "2661.32712864", price_change_pct: "0.41386049", volume: "3241626349070.16", volume_change: "1533942003592.29", volume_change_pct: "0.90", …}
// circulating_supply: "18023112"
// currency: "BTC"
// high: "19408.82122873"
// high_timestamp: "2017-12-16"
// id: "BTC"
// logo_url: "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
// market_cap: "163862899935.33"
// max_supply: "21000000"
// name: "Bitcoin"
// price: "9091.82054327"
// price_date: "2019-11-01"
// rank: "1"
// symbol: "BTC"