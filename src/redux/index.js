import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';
import { actorReducer } from '../actor/actor.reducer';
import { showReducer } from '../show/show.reducer';
import { searchReducer } from '../search/search.reducer';
import customMiddleware from './middleware';

const combinedReducers = combineReducers({
  routing: reducers.routerReducer,
  isLoggedIn: reducers.isLoggedIn,
  search: searchReducer,
  actors: actorReducer,
  shows: showReducer,
});

// store
const store = createStore(combinedReducers,
  compose(
    applyMiddleware(
      thunkMiddleware,
      ...customMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
