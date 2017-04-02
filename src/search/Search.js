import React, { Component } from 'react';
import './Search.css';
import Header from './header/Header';
import Results from './results/Results';
import { search, toTileFormat } from '../api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSearch(searchTerm) {
    search(searchTerm).then(rawResults => {
      this.setState({
        searchResults: toTileFormat(rawResults),
        rawResults
      });
    });
  }

  onTileSelect(itemId) {
    this.props.router.push(`/show/${itemId}`);
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div className="container">
        <Header
          doSearch={this.doSearch.bind(this)}
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
