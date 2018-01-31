import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import { loadHomeMsg } from './actions'
import './style.css'

class Home extends Component {
  render() {
    let { props } = this
    let serverMsg = !!props.serverMsg && (
      <React.Fragment>
        <div>error: {props.error ? 'Yes' : 'No'}</div>
        <div>MSG : {props.serverMsg}</div>
      </React.Fragment>
    )
    return (
      <div className="home">
        <Helmet>
          <title>Home</title>>
        </Helmet>
        <div>{props.msg}</div>
        <button type="button" onClick={props.actions.loadHomeMsg}>
          Load Server Msg
        </button>
        {serverMsg}
      </div>
    )
  }
}

export default connect(
  state => ({
    msg: state.home.msg,
    error: state.home.error,
    serverMsg: state.home.serverMsg
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        loadHomeMsg
      },
      dispatch
    )
  })
)(Home)
