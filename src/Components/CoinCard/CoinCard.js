import React from 'react';
import './CoinCard.scss';

const CoinCard = ({name, rank, logo, price, circulatingSupply}) => {
  return (
    <section id='coin-card-section'>
      <h1>{name}</h1>
      <img src={logo} alt='coin logo' />
      <table>
        <tr>
          <td>Price</td>
          <td>${Number(price).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Circulation</td>
          <td>{circulatingSupply}</td>
        </tr>
      </table>
      <button>Track Coin</button>
    </section>
  );
}

export default CoinCard;