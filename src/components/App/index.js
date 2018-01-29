import React, { Component } from 'react'
import logo from '../../common/statics/image/logo.png'
import './style.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact'
import Home from '../Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">contact</Link>
            </div>
          </div>
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
