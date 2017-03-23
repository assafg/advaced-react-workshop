import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Results from './results/Results';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
