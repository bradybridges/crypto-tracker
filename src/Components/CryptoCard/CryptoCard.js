import React from 'react';

const CryptoCard = (props) => {
  const price = Number(props.price).toFixed(2);
  const percentChange = (Number(props.percentChange) * 100).toFixed(2);
  return (
    <section>
      <div>
        <img src={props.logo} alt='Cryptocurrency logo' />
        <h1>{props.name}</h1>
      </div>
      <p>${price}</p>
      <p>%{percentChange}</p>
      <p>Rank {props.rank}</p>
    </section>
  );
}

export default CryptoCard;