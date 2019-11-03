import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePortfolio } from '../../Actions/index';
import './QuantityInput.scss';

export class QuantityInput extends Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      qty: '',
    }
  }

    handleChange = (e) => {
    const qty = Number(e.target.value);
    const name = this.props.coin.name;
    const indexExistingCoin = this.props.portfolio.findIndex( coin => coin.name === name);

    if(qty > 0){
      this.setState({name, qty})
      this.updatePortfolio(name, qty, indexExistingCoin);
    } else if( qty === 0) {
      this.setState({name: '', qty: ''});
    }
  }

  updatePortfolio = (name, qty, indexExistingCoin) => {
    if(indexExistingCoin !== -1) {
      let portfolio = this.props.portfolio.map( coin => coin);
      portfolio[indexExistingCoin] = {name, qty};
      this.props.updatePortfolio(portfolio);
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
    } else {
      this.props.updatePortfolio([...this.props.portfolio, {name, qty}]);
      localStorage.setItem('portfolio', JSON.stringify([...this.props.portfolio, {name, qty}]))
    }
  }

  render() {
    const { coin } = this.props;
    return (
      <div className='coin-input-div'>
        <label>{coin.name}</label>
        <input type='number' placeholder={`Quantity: (${this.props.qty})`} onChange={this.handleChange} value={this.state.qty} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updatePortfolio: portfolio => dispatch( updatePortfolio(portfolio) ),
});

export const mapStateToProps = state => ({
  portfolio: state.portfolio,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantityInput);