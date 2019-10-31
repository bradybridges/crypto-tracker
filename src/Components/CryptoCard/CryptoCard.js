import React from 'react';

const CryptoCard = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.percentChange}</p>
      <p>Rank {props.rank}</p>
    </section>
  );
}

export default CryptoCard;