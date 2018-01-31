import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import './style.css'

class Contact extends Component {
  render() {
    let { props } = this
    return (
      <div className="contact">
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Contact page" />
          <meta name="author" content="Ripple" />
        </Helmet>
        <span>{props.msg}</span>
      </div>
    )
  }
}

export default connect(
  state => ({
    msg: state.contact.msg
  }),
  dispatch => ({
    actions: bindActionCreators({}, dispatch)
  })
)(Contact)
