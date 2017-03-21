import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div>
        <input type="text" id="search-input" />
        <button id="search-btn" >search</button>
      </div>
    );
  }
}
