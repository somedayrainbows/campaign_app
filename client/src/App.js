import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>
        <a href="/auth/google">Log in with your Google account</a>
        </h2>
      </div>
    );
  }
}

export default App;
