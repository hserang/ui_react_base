import * as actionTypes from '../actionTypes'
import reducer, { initialState } from '../reducer'

describe.only('home reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle HOME_MSG_LOAD_SUCCESS', () => {
    let data = { msg: 'ok' }
    let nextState = Object.assign({}, initialState, { serverMsg: data.msg })
    expect(reducer(initialState, { type: actionTypes.HOME_MSG_LOAD_SUCCESS, data: data })).toEqual(
      nextState
    )
  })

  it('should handle HOME_MSG_LOAD_FAIL', () => {
    let data = { msg: 'not ok' }
    let nextState = Object.assign({}, initialState, { serverMsg: data.msg, error: true })
    expect(reducer(initialState, { type: actionTypes.HOME_MSG_LOAD_FAIL, data: data })).toEqual(
      nextState
    )
  })
})
