import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import downArrow from '../../Images/down-arrow.png';
import upArrow from '../../Images/up-arrow.png';
import './CryptoCard.scss';

export const CryptoCard = (props) => {
  const price = Number(props.price).toFixed(2);
  const percentChange = (Number(props.percentChange) * 100).toFixed(2);
  const arrowSrc = Number(props.percentChange) < 0 ? downArrow : upArrow;
  return (
    <NavLink className="navlink" to={`/coins/${props.name}`}>
      <section className="crypto-card">
        <h4 className="card-item">{props.name}</h4>
        <p className="card-item">
          $
          {price}
        </p>
        <p className="card-item">
          %
          {percentChange}
        </p>
        <img src={arrowSrc} alt="percent change indicator" />
      </section>
    </NavLink>
  );
};
export const mapStateToProps = (state) => ({
  timeFrame: state.timeFrame,
});

export default connect(mapStateToProps)(CryptoCard);

CryptoCard.propTypes = {
  price: PropTypes.string.isRequired,
  percentChange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
