import React from 'react';
import downArrow from '../../Images/down-arrow.png';
import upArrow from '../../Images/up-arrow.png';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './CryptoCard.scss';

export const CryptoCard = (props) => {
  const price = Number(props.price).toFixed(2);
  const percentChange = (Number(props.percentChange) * 100).toFixed(2);
  const arrowSrc = Number(props.percentChange) < 0 ? downArrow : upArrow;
  return (
    <NavLink to={`/coins/${props.name}`}>
    <section className='crypto-card'>
        <h4>{props.name}</h4>
        <p>${price}</p>
        <p>%{percentChange}</p>
        <img src={arrowSrc} alt='percent change indicator' />
    </section>
    </NavLink>
  );
}
export const mapStateToProps = state => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps)(CryptoCard);