import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Search from './search/Search';

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/search" component={Search} />
      </Router>
    );
  }
}

export default App;
