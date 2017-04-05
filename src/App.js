import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './Main';
import Search from './search/SearchContainer';
import Show from './show/Show';
import Actor from './actor/Actor';

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <IndexRoute component={Search}/>
          <Route path="/show/:showId" component={Show} />
          <Route path="/actor/:actorId" component={Actor} />
        </Route>
      </Router>
    );
  }
}

export default App;
