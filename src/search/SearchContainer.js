import { connect } from 'react-redux';
import { searchShows } from './search.actions';
import Search from './Search';

const mapStateToProps = (state) => ({
  searchTerm: state.getIn(['search', 'searchTerm']),
  searchResults: state.getIn(['search', 'searchResults']).toJS(),
});

const mapDispatchToProps = dispatch => ({
  searchShows: (searchTerm) => dispatch(searchShows(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
