import React from 'react'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { initialState } from '../reducer'
import Contact from '../index'

describe('Contact component', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store
  beforeEach(() => {
    store = mockStore({ contact: initialState })
  })

  afterEach(() => {
    store = null
  })

  it('renders without crashing', () => {
    shallow(<Contact store={store} />)
  })

  it('renders correct message from Redux', () => {
    const wrapper = mount(<Contact store={store} />)
    const msg = <span>{initialState.msg}</span>
    // Approach #1
    expect(wrapper.contains(msg)).toEqual(true)
    // Approach #2
    expect(wrapper).toContainReact(msg)
    wrapper.unmount()
  })
})
