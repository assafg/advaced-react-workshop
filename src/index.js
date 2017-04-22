import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import App from './App';
import 'bulma/css/bulma.css';
import './index.css';
import store from './redux/index';

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
})

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
