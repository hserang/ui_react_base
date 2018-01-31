import React, { Component } from 'react'
import Loadable from 'react-loadable'
import AsyncLoading from '../common/AsyncLoading.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { translate } from 'react-i18next'
import Home from '../Home'
import logo from '../common/statics/image/logo.png'
import './style.css'

class App extends Component {
  render() {
    let { t, i18n } = this.props
    const asyncAbout = Loadable({
      loader: () => import('../About'),
      loading: AsyncLoading
    })

    const asyncContact = Loadable({
      loader: () => import('../Contact'),
      loading: AsyncLoading
    })
    asyncContact.preload()

    let loading = this.props.isLoading && <div>Loading data ....</div>
    return (
      <Router>
        <div className="app">
          <Helmet>
            <meta name="description" content="UI React Based" />
            <meta name="author" content="Ripple" />
          </Helmet>
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">contact</Link>
            </div>
            <div className="lang">
              <button onClick={() => i18n.changeLanguage('de')}>de</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
              <div>{t('welcome')}</div>
            </div>
          </div>
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={asyncAbout} />
              <Route path="/contact" component={asyncContact} />
            </Switch>
          </div>
          {loading}
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({
    isLoading: state.app.isLoading
  }),
  dispatch => ({
    actions: bindActionCreators({}, dispatch)
  })
)(translate()(App))
