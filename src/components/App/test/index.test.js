import React from 'react'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { initialState } from '../reducer'
import App from '../index'

describe('App component', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store
  beforeEach(() => {
    store = mockStore({ app: initialState })
  })

  afterEach(() => {
    store = null
  })

  it('renders without crashing', () => {
    shallow(<App store={store} />)
  })
})
