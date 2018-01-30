import * as actionTypes from '../actionTypes'
import reducer, { initialState } from '../reducer'

describe.only('app reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle LOADING_START', () => {
    let nextState = Object.assign({}, initialState, { isLoading: true })
    expect(reducer(initialState, { type: actionTypes.LOADING_START })).toEqual(nextState)
  })

  it('should handle LOADING_FINISH', () => {
    let nextState = Object.assign({}, initialState, { isLoading: false })
    expect(reducer(initialState, { type: actionTypes.LOADING_FINISH })).toEqual(nextState)
  })
})
