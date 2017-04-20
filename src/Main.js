import React, { Component } from 'react'
import LoginToggle from './LoginToggleContainer';

class Main extends Component {

  render () {
    return (
      <div className="container">
        <div className="heading">
          <h1 className="title">Show Finder
            <LoginToggle />
          </h1>
          <h2 className="subtitle">
            A simple show and movie finder
          </h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
