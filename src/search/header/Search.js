import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    doSearch: PropTypes.func.isRequired,
    searchTerm: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = { searchTerm: props.searchTerm };
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  doSearch() {
    const { searchTerm } = this.state;
    const { doSearch } = this.props;
    doSearch(searchTerm);
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.doSearch();
    }
  }

  render() {
    return (
      <div className="level-left">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Search for a show"
                onChange={this.onSearchChange.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
              />
            </p>
            <p className="control">
              <button className="button" onClick={this.doSearch.bind(this)}>
                SEARCH
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
