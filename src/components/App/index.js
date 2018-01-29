import React, { Component } from 'react'
import Loadable from 'react-loadable'
import AsyncLoading from '../common/AsyncLoading.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Home'
import logo from '../common/statics/image/logo.png'
import './style.css'

class App extends Component {
  render() {
    const asyncAbout = Loadable({
      loader: () => import('../About'),
      loading: AsyncLoading
    })

    const asyncContact = Loadable({
      loader: () => import('../Contact'),
      loading: AsyncLoading
    })
    asyncContact.preload()

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
              <Route path="/about" component={asyncAbout} />
              <Route path="/contact" component={asyncContact} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
