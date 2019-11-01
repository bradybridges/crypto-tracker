import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchTopCryptos } from '../../apiCalls';
import { connect } from 'react-redux';
import { updateCryptos, updateError } from '../../Actions/';
import Header from '../../Components/Header/Header';
import CryptoContainer from '../../Containers/CryptoContainer/CryptoContainer';
import Nav from '../../Components/Nav/Nav';
import SearchCoins from '../SearchCoins/SearchCoins';
import Portfolio from '../../Containers/Portfolio/Portfolio';
import './App.scss';

export class App extends Component {

  componentDidMount = () => {
    this.getCryptos();
  }

  getCryptos = () => {
    fetchTopCryptos()
    .then(cryptos => {
      console.log(cryptos);
      this.props.updateCryptos(cryptos);
    })
    .catch(error => {
      console.log(error.message)
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
        <Route path='/search' component={SearchCoins} />
        <Route path='/portfolio' component={Portfolio} />
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
});

const mapStateToProps = state => ({
  cryptos: state.cryptos,
  error: state.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);