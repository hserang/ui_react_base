import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import { LOADING_START, LOADING_FINISH } from '../../App/actionTypes'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loadAboutMsg', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should dispatch correct actions on successful loadAboutMsg', () => {
    const data = { msg: 'ok' }
    const expectedActions = [
      { type: LOADING_START },
      { type: LOADING_FINISH },
      { type: actionTypes.ABOUT_MSG_LOAD_SUCCESS, data: data }
    ]
    const store = mockStore({ about: {} })
    moxios.stubRequest('/api/v1/about/msg', {
      status: 200,
      response: data
    })
    return store.dispatch(actions.loadAboutMsg(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should dispatch correct actions on failed loadAboutMsg, status != 2xx', () => {
    const errors = { msg: 'not ok' }
    const expectedActions = [
      { type: LOADING_START },
      { type: LOADING_FINISH },
      { type: actionTypes.ABOUT_MSG_LOAD_FAIL, data: errors }
    ]
    const store = mockStore({ about: {} })
    moxios.stubRequest('/api/v1/about/msg', {
      status: 500,
      response: errors
    })
    return store.dispatch(actions.loadAboutMsg({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
