import { connect } from 'react-redux';
import { searchShows } from '../redux/actions';
import Search from './Search';

const mapStateToProps = (state) => ({
  searchTerm: state.getIn(['search', 'searchTerm']),
  searchResults: state.getIn(['search', 'searchResults']).toJS(),
});

const mapDispatchToProps = dispatch => ({
  searchShows: (searchTerm) => searchShows(dispatch)(searchTerm),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
