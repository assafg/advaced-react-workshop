import { connect } from 'react-redux';
import { loadActorDetails } from './actor.actions';
import Actor from './Actor';

const mapStateToProps = state => ({
  actor: state.getIn(['actors', 'currentActor']) ?
          state.getIn(['actors', 'currentActor']).toJS() :
          null,
});

const mapDispatchToProps = dispatch => ({
  fetchActor: actorId => dispatch(loadActorDetails(actorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
