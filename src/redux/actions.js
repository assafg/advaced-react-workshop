import * as api from '../api';

// Search Actions
export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';

const searchRequest = (searchTerm) => ({
  type: SEARCH_REQUEST,
  payload: { searchTerm },
});

const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: { results },
});

const searchFailed = (err) => ({
  type: SEARCH_FAILED,
  payload: { err },
});

export const searchShows = (searchTerm) => dispatch => {
  dispatch(searchRequest(searchTerm));
  api.search(searchTerm)
    .then(res => dispatch(searchSuccess(res)))
    .catch(err => dispatch(searchFailed(err)));
}
