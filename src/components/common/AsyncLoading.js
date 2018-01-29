import React, { Component } from 'react'

class AsyncLoading extends Component {
  render() {
    const { props } = this
    if (props.isLoading) {
      // While our other component is loading...
      if (props.timedOut) {
        // In case we've timed out loading our other component.
        return <div>Loading component took longer than expected</div>
      } else if (props.pastDelay) {
        // Display a loading screen after a set delay.
        // TODO: mybe snack bar is better won't jump the screen
        return <div>Component is loading</div>
      } else {
        // Don't flash "Loading..." when we don't need to.
        return null
      }
    } else if (props.error) {
      // If we aren't loading, maybe
      return <div>Failed to load Component</div>
    } else {
      // This case shouldn't happen... but we'll return null anyways.
      return null
    }
  }
}

export default AsyncLoading
