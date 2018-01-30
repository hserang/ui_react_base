import reducer, { initialState } from '../reducer'

describe.only('contact reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
