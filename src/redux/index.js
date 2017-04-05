import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

// Toggel Login action
export const toggleIsLoggedIn = () => ({
  type: 'TOGGLE_LOGGED_IN'
});

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return !state.isLoggedIn;
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  isLoggedIn,
  search: reducers.searchReducer,
});

// store
const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
