import React, { Component } from 'react';
import logo from '../../common/statics/image/logo.png';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;