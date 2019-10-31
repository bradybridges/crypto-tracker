import React, { Component } from 'react';
import { fetchTopCryptos } from '../../apiCalls';
import { connect } from 'react-redux';
import { updateCryptos, updateError } from '../../Actions/';

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
  }//should be called at in intervals to update info periodically

  handleCryptoRefresh = () => {
    setInterval(() => {
      this.getCryptos();
    }, 60000);
  }

  render() {
    // this.handleCryptoRefresh(); //uncomment for 60 sec refresh of data
    return (
      <h1>Welcome to crypto tracker</h1>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCryptos: cryptos => dispatch( updateCryptos(cryptos) ),
  updateError: error => dispatch( updateError(error) ),
});

const mapStateToProps = state => ({
  cryptos: state.cryptos,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);