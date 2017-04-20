import { connect } from 'react-redux';
import Show from './Show';
import { loadShowDetails } from './show.actions';

const mapStateToProps = state => ({
  show: state.getIn(['shows', 'currentShow']) ?
          state.getIn(['shows', 'currentShow']).toJS() :
          null,
});
const mapDispatchToProps = dispatch => ({
  loadShowDetails: showId => loadShowDetails(dispatch)(showId),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
