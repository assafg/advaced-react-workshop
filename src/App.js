import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Search from './search/Search';
import Show from './show/Show';
import Actor from './actor/Actor';

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/search" component={Search} />
        <Route path="/show" component={Show} />
        <Route path="/actor" component={Actor} />
      </Router>
    );
  }
}

export default App;
