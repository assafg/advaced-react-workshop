import React, { PropTypes } from 'react'
import LoginToggle from './LoginToggleContainer';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  toggleIsLoggedIn() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render () {
    return (
      <div className="container">
        <div className="heading">
          <h1 className="title">Show Finder
            <LoginToggle
              toggleIsLoggedIn={this.toggleIsLoggedIn.bind(this)}
              isLoggedIn={this.state.isLoggedIn}
            />
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
