import { fromJS } from 'immutable';
import {
  SHOW_LOAD_REQUEST,
  SHOW_LOAD_SUCCESS,
  SHOW_LOAD_FAILED,
} from './show.actions';

const initialState = fromJS({
  showsCache: {},
  currentShow: null,
  loading: false,
  error: null,
});

export const showReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOAD_REQUEST:
      return state.withMutations(s => {
        s.set('error', null)
        .set('loading', true)
        .setIn('currentShow', null);
      });
    case SHOW_LOAD_SUCCESS:
      return state.withMutations(s => {
        s.set('error', null)
        .set('currentShow', fromJS(action.payload))
        .setIn(['showsCache', `${action.payload.externals.thetvdb}`], fromJS(action.payload))
      });
    case SHOW_LOAD_FAILED:
      return state.withMutations(s => {
        s.set('loading', false)
          .set('error', fromJS(action.payload))
      });
    default:
      return state;
  }
}
