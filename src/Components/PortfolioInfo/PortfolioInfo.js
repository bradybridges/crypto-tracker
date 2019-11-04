import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PortfolioInfo.scss';
import closeButton from '../../Images/close-button.svg';

class PortfolioInfo extends Component {
   renderCoinValues = () => {
     const { coinValues } = this.props;
     const elements = coinValues.map((coin) => {
       return (
         <div className="coin-value-div" key={coin.name}>
           <p>{coin.name}</p>
           <p>
            ${Number(coin.value).toFixed(2)}
           </p>
         </div>
       );
     });
     return elements;
   }

   render() {
     const { total } = this.props;
     return (
       <section id="portfolio-info-container">
         <img id="close-portfolio-btn" src={closeButton} alt="close portfolio" onClick={this.props.closePortfolio} />
         <h2 className="header">Portfolio Value</h2>
         <section>
           <h4 className="header">Total</h4>
           <p id="total-p">
            ${Number(total).toFixed(2)}
           </p>
           {this.renderCoinValues()}
         </section>
       </section>
     );
   }
}

export default PortfolioInfo;

PortfolioInfo.propTypes = {
  total: PropTypes.string.isRequired,
  coinValues: PropTypes.array.isRequired,
  closePortfolio: PropTypes.func.isRequired,
};
