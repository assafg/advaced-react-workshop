import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import * as reducers from './reducers';
import { actorReducer } from '../actor/actor.reducer';
import { showReducer } from '../show/show.reducer';

const combinedReducers = combineReducers({
  isLoggedIn: reducers.isLoggedIn,
  search: reducers.searchReducer,
  actors: actorReducer,
  shows: showReducer,
});

// store
const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
