import {
  showActor,
  showActorCastCredit,
} from '../api';

export const ACTOR_LOAD_REQUEST = 'ACTOR_REQUEST';
export const ACTOR_LOAD_SUCCESS = 'ACTOR_LOAD_SUCCESS';
export const ACTOR_LOAD_FAILED = 'ACTOR_LOAD_FAILED';

const loadActor = actorId => ({
  type: ACTOR_LOAD_REQUEST,
  payload: actorId,
});

const actorLoadSuccess = data => ({
  type: ACTOR_LOAD_SUCCESS,
  payload: data,
});

const actorLoadFailed = err => ({
  type: ACTOR_LOAD_FAILED,
  payload: err,
});

export const loadActorDetails = actorId => (disptach, getState) => {
  const actor = getState().getIn(['actors', 'actorsCache', actorId]);
  if (actor) {
    return disptach(actorLoadSuccess(actor.toJS()));
  }
  disptach(loadActor(actorId));
  Promise.all([
    showActor(actorId),
    showActorCastCredit(actorId)
  ])
  .then(results => {
    const actor = Object.assign({}, results[0], { credits: results[1] });
    disptach(actorLoadSuccess(actor));
  })
  .catch(err => actorLoadFailed(err));
}
