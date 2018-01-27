import React, { Component } from 'react'
import logo from '../../common/statics/image/logo.png'
import './style.css'
import About from '../About'
import Contact from '../Contact'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          UI React base
        </div>
        <div className="app-body">
          <About />
          <hr />
          <Contact />
        </div>
      </div>
    )
  }
}

export default App
