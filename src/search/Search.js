import React, { Component, PropTypes } from 'react';
import './Search.css';
import Header from './header/Header';
import Results from './results/Results';
import { search, toTileFormat } from '../api';

class Search extends Component {
  static propTypes = {
    searchShows: PropTypes.func,
    searchResults: PropTypes.array,
    searchTerm: PropTypes.string,
  }
  constructor(props) {
    super(props);
  }

  doSearch(searchTerm) {
    const { searchShows } = this.props;
    searchShows(searchTerm);
  }

  onTileSelect(itemId) {
    this.props.router.push(`/show/${itemId}`);
  }

  render() {
    const { searchResults, searchTerm } = this.props;
    return (
      <div className="container">
        <Header
          doSearch={this.doSearch.bind(this)}
          searchTerm={searchTerm}
        />
        <Results
          searchResults={searchResults}
          onTileSelect={this.onTileSelect.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
