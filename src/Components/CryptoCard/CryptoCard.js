import React from 'react';
import downArrow from '../../Images/down-arrow.png';
import upArrow from '../../Images/up-arrow.png';

const CryptoCard = (props) => {
  const price = Number(props.price).toFixed(2);
  const percentChange = (Number(props.percentChange) * 100).toFixed(2);
  const arrowSrc = Number(props.percentChange) < 0 ? downArrow : upArrow;
  return (
    <section>
      <div>
        <img src={props.logo} alt='Cryptocurrency logo' />
        <h1>{props.name}</h1>
      </div>
      <p>${price}</p>
      <img src={arrowSrc} alt='percent change indicator' />
      <p>%{percentChange}</p>
      <p>Rank {props.rank}</p>
    </section>
  );
}

export default CryptoCard;