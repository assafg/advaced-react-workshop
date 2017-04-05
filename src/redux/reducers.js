import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILED
} from './actions';

const searchInitialState = {
  searchTerm: '',
  searchResults: [],
  isSearching: false,
  error: null,
}

export const searchReducer = (state = searchInitialState, action) => {
  switch(action.type) {
    case SEARCH_REQUEST:
      return {
        searchTerm: action.payload.searchTerm,
        searchResults: [],
        isSearching: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        searchResults: action.payload.searchResults,
        isSearching: false,
        searchTerm: state.searchTerm,
        error: null,
      };
    case SEARCH_FAILED:
      return {
        searchResults: action.payload.searchResults,
        searchTerm: state.searchTerm,
        isSearching: false,
        error: action.payload.err,
      };
    default:
      return state;
  }
}
