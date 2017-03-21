import React, { Component } from 'react';
import Search from './Search';
import LoginToggle from './LoginToggle';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Search />
        <LoginToggle />
      </div>
    );
  }
}
