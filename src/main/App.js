import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Results from './results/Results';
import { searchResults } from '../mocks/mock_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSearch(searchTerm) {
    console.log('searchTerm', searchTerm);
    this.setState({ searchResults })
  }

  onTileSelect(itemId) {
    console.log('selected item: ', itemId);
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

export default App;
