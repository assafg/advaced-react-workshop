import { createStore } from 'redux';
// actions
export const toggleIsLoggedIn = () => ({
  type: 'TOGGLE_LOGGED_IN'
});

const initialState = {
  isLoggedIn: false,
}
// singlereducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return Object.assign({}, state, {isLoggedIn: !state.isLoggedIn });
    default:
      return state;
  }
};

// store
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
