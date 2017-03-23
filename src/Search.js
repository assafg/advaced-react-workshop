import React, { Component } from 'react';

export default class Search extends Component {

  doSearch(e) {
    console.log('doSearch', e);
  }

  render() {
    return (
      <div className="level-left">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Search for a show" />
            </p>
            <p className="control">
              <button className="button" onClick={this.doSearch}>
                SEARCH
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
