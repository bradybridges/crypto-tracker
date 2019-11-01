import React, { Component } from 'react';
import './SearchCoins.scss';
import searchImg from '../../Images/search.svg';
import { searchCoin } from '../../apiCalls';
import CoinCard  from '../../Components/CoinCard/CoinCard';

class SearchCoins extends Component {
  constructor() {
    super();
    this.state = {
      symbol: '',
      coin: {},
    }
  }

  handleChange = (e) => {
    const symbol = e.target.value.toUpperCase();
    this.setState({[e.target.name]: symbol});
  }

  handleCoinSearch = async (e) => {
    e.preventDefault();
    const symbol = this.state.symbol;
    const coin = await searchCoin(symbol);
    if(coin.length === 0) {
      console.log('coin not found');
      this.setState({symbol: '', coin: {error: 'Coin Not Found'}});
    } else {
      this.setState({coin: coin[0]});
      console.log(coin[0]);
      this.setState({symbol: ''});
    }
  }

  render() {
    const {rank, logo_url, price, name, error} = this.state.coin;
    return(
      <section>
        <form onSubmit={this.handleCoinSearch}>
          <input name='symbol' type='text' maxLength='3' placeholder='Ex BTC' value={this.state.symbol} onChange={this.handleChange} />
          <img src={searchImg} alt='search button' />
        </form>
        {this.state.coin.name && <CoinCard name={name} rank={rank} price={price} logo={logo_url} />}
        {this.state.coin.error && <h3>Coin Not Found</h3>}
      </section>
    );
  }
}

export default SearchCoins;