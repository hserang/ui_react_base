import React from 'react'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { initialState } from '../reducer'
import About from '../index'

describe('About component', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store
  beforeEach(() => {
    store = mockStore({ about: initialState })
  })

  afterEach(() => {
    store = null
  })

  it('renders without crashing', () => {
    shallow(<About store={store} />)
  })

  it('renders correct message from Redux', () => {
    const wrapper = mount(<About store={store} />)
    const msg = <div>{initialState.msg}</div>
    expect(wrapper).toContainReact(msg)
    wrapper.unmount()
  })

  it('renders correct successfull message load', () => {
    store = mockStore({
      about: {
        msg: 'MSG from redux: This is About component',
        error: false,
        serverMsg: 'ok'
      }
    })
    const wrapper = mount(<About store={store} />)
    expect(wrapper).toContainReact(<div>error: No</div>)
    expect(wrapper).toContainReact(<div>MSG : ok</div>)
    wrapper.unmount()
  })

  it('renders correct fail message load', () => {
    store = mockStore({
      about: {
        msg: 'MSG from redux: This is About component',
        error: true,
        serverMsg: 'not ok'
      }
    })
    const wrapper = mount(<About store={store} />)
    expect(wrapper).toContainReact(<div>error: Yes</div>)
    expect(wrapper).toContainReact(<div>MSG : not ok</div>)
    wrapper.unmount()
  })
})
