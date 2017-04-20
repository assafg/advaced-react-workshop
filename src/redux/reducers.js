import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILED
} from './actions';

import { fromJS, List } from 'immutable';

const searchInitialState = fromJS({
  searchTerm: '',
  searchResults: [],
  isSearching: false,
  error: null,
});

export const searchReducer = (state = searchInitialState, action) => {
  switch(action.type) {
    case SEARCH_REQUEST:
      // This creates multiple objects along the way
      return state
        .set('searchTerm', action.payload.searchTerm)
        .set('searchResults', new List())
        .set('isSearching', true)
        .set('error', null);

    case SEARCH_SUCCESS:
      return state.withMutations(s => { // Avoids creating multiple maps
        s.set('searchResults', fromJS(action.payload.searchResults))
          .set('isSearching', false)
          .set('error', null);
        });
    case SEARCH_FAILED:
      return state.withMutations(s => { // Avoids creating multiple maps
        s.set('isSearching', false)
          .set('error', fromJS(action.payload.err));
        });
    default:
      return state;
  }
}

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return !state.isLoggedIn;
    default:
      return state;
  }
};
