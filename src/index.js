import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './Reducers/index';
import { HashRouter } from 'react-router-dom';
import './index.scss';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
