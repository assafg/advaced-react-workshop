import { fromJS } from 'immutable';
import {
  ACTOR_LOAD_REQUEST,
  ACTOR_LOAD_SUCCESS,
  ACTOR_LOAD_FAILED,
} from './actor.actions';

const initialState = fromJS({
  actorsCache: {},
  currentActor: null,
  loading: false,
  error: null,
});

export const actorReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTOR_LOAD_REQUEST:
      return state.withMutations(s => {
        s.set('error', null)
        .set('loading', true)
        .setIn('currentActor', null);
      });
    case ACTOR_LOAD_SUCCESS:
      return state.withMutations(s => {
        s.set('error', null)
        .set('currentActor', fromJS(action.payload))
        .setIn(['actorsCache', `${action.payload.id}`], fromJS(action.payload))
      });
    case ACTOR_LOAD_FAILED:
      return state.withMutations(s => {
        s.set('loading', false)
          .set('error', fromJS(action.payload))
      });
    default:
      return state;
  }
}
