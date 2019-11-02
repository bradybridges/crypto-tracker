import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { fetchTopCryptos } from '../../apiCalls';
import { connect } from 'react-redux';
import { updateCryptos, updateError, updateTrackedCoins, updatePortfolio } from '../../Actions/';
import Header from '../../Components/Header/Header';
import CryptoContainer from '../../Containers/CryptoContainer/CryptoContainer';
import Nav from '../../Components/Nav/Nav';
import SearchCoins from '../SearchCoins/SearchCoins';
import Portfolio from '../../Containers/Portfolio/Portfolio';
import './App.scss';

export class App extends Component {

  componentDidMount = () => {
    const localTrackedCoins = JSON.parse(localStorage.getItem('trackedCoins'));
    if(localTrackedCoins) {
      this.props.updateTrackedCoins(localTrackedCoins);
      this.getCryptos(localTrackedCoins);
      this.loadPortfolio();
    } else {
      this.getCryptos(this.props.trackedCoins);
    }
  }

  loadPortfolio = () => {
    const localPortfolio = JSON.parse(localStorage.getItem('portfolio'));

    if(localPortfolio) {
      this.props.updatePortfolio(localPortfolio);
    }
  }

  getCryptos = symbols => {
    fetchTopCryptos(symbols)
    .then(cryptos => {
      this.props.updateCryptos(cryptos);
    })
    .catch(error => {
      this.props.updateError(error.message);
    });
  }

  handleCryptoRefresh = () => {
    setInterval(() => {
      this.getCryptos();
    }, 60000);
  }

  render() {
    // this.handleCryptoRefresh(); //uncomment for 60 sec refresh of data
    return (
      <main>
        <Header />
        <Route exact path='/' component={CryptoContainer} />
        <Route path='/search' render={() => <SearchCoins getCryptos={this.getCryptos} />} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/coins/:name' render={({ match }) => {
	        const { name } = match.params
	        const coin = this.props.cryptos.find(coin => coin.name === name);
          return coin && <h2>test</h2>
        }} />
        <nav>
          <Nav />
        </nav>
      </main>
      
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCryptos: cryptos => dispatch( updateCryptos(cryptos) ),
  updateError: error => dispatch( updateError(error) ),
  updateTrackedCoins: coins => dispatch( updateTrackedCoins(coins) ),
  updatePortfolio: portfolio => dispatch( updatePortfolio(portfolio) ),
});

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  error: state.error,
  trackedCoins: state.trackedCoins,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);