import React, { Component } from 'react';
import './PortfolioInfo.scss';
import closeButton from '../../Images/close-button.svg';

class PortfolioInfo extends Component {
  
  renderCoinValues = () => {
    const { coinValues } = this.props;
    const elements = coinValues.map( coin => {
      return (
        <div key={coin.name}>
          <p>{coin.name}</p>
          <p>${Number(coin.value).toFixed(2)}</p>
        </div>
      );
    })
    return elements;
  }

  closePortfolio = () => {

  }

  render() {
    const { total } = this.props;
    return (
      <section>
        <img src={closeButton} alt='close portfolio' onClick={this.props.closePortfolio} />
        <h2>Portfolio Value</h2>
        <div>
          <h4>Total</h4>
          <p>${Number(total).toFixed(2)}</p>
          {this.renderCoinValues()}
        </div>
      </section>
    );
  }
}

export default PortfolioInfo;