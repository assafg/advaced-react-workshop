import { Map } from 'immutable';

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return !state.isLoggedIn;
    default:
      return state;
  }
};

export const routerReducer = (state = Map({}), action) => {
  if (action.type.match(/^@@/)){
    return Map({ locationBeforeTransitions: action.payload });
  }
  return state;
}
