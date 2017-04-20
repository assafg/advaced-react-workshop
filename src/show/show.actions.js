import {
  showLookup,
  showCast,
} from '../api';

export const SHOW_LOAD_REQUEST = 'SHOW_REQUEST';
export const SHOW_LOAD_SUCCESS = 'SHOW_LOAD_SUCCESS';
export const SHOW_LOAD_FAILED = 'SHOW_LOAD_FAILED';

const loadShow = showId => ({
  type: SHOW_LOAD_REQUEST,
  payload: showId,
});

const showLoadSuccess = data => ({
  type: SHOW_LOAD_SUCCESS,
  payload: data,
});

const showLoadFailed = err => ({
  type: SHOW_LOAD_FAILED,
  payload: err,
});

export const loadShowDetails = (disptach) => showId => {
  disptach(loadShow(showId));
  showLookup(showId)
    .then(details => {
      showCast(details.id)
        .then(cast => {
          const show = Object.assign({}, details, { cast });
          disptach(showLoadSuccess(show));
        }).catch(err => showLoadFailed(err));
    }).catch(err => showLoadFailed(err));
}
