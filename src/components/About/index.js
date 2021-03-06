import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import { loadAboutMsg } from './actions'
import './style.css'

class About extends Component {
  render() {
    let { props } = this
    let serverMsg = !!props.serverMsg && (
      <React.Fragment>
        <div>error: {props.error ? 'Yes' : 'No'}</div>
        <div>MSG : {props.serverMsg}</div>
      </React.Fragment>
    )
    return (
      <div className="about">
        <Helmet>
          <title>About</title>
          <meta name="description" content="About page" />
          <meta name="keywords" content="Ripple,XRP" />
          <meta name="author" content="Ripple" />
        </Helmet>
        <div>{props.msg}</div>
        <button type="button" onClick={props.actions.loadAboutMsg}>
          Load Server Msg
        </button>
        {serverMsg}
      </div>
    )
  }
}

export default connect(
  state => ({
    msg: state.about.msg,
    error: state.about.error,
    serverMsg: state.about.serverMsg
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        loadAboutMsg
      },
      dispatch
    )
  })
)(About)
