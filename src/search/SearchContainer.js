import { connect } from 'react-redux';
import { searchShows } from '../redux/actions';
import Search from './Search';

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
  searchResults: state.search.searchResults,
});

const mapDispatchToProps = dispatch => ({
  searchShows: (searchTerm) => searchShows(searchTerm)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
