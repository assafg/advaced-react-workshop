import * as api from '../api';

// Search Actions
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

// Toggel Login action
export const toggleIsLoggedIn = () => ({
  type: 'TOGGLE_LOGGED_IN'
});

const searchRequest = (searchTerm) => ({
  type: SEARCH_REQUEST,
  payload: { searchTerm },
});

const searchSuccess = (searchResults) => ({
  type: SEARCH_SUCCESS,
  payload: { searchResults },
});

const searchFailed = (err) => ({
  type: SEARCH_FAILED,
  payload: { err },
});

export const searchShows = dispatch => searchTerm => {
  dispatch(searchRequest(searchTerm));
  api.search(searchTerm)
    .then(res => dispatch(searchSuccess(res)))
    .catch(err => dispatch(searchFailed(err)));
}
