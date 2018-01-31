import * as actionTypes from './actionTypes'

export const initialState = {
  isLoading: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return { ...state, isLoading: true }
    case actionTypes.LOADING_FINISH:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default appReducer
