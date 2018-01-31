import * as actionTypes from './actionTypes'

export const initialState = {
  msg: 'MSG from redux: This is About component',
  error: false,
  serverMsg: ''
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ABOUT_MSG_LOAD_SUCCESS:
      return { ...state, error: false, serverMsg: action.data.msg }
    case actionTypes.ABOUT_MSG_LOAD_FAIL:
      return { ...state, error: true, serverMsg: action.data.msg }
    default:
      return state
  }
}

export default aboutReducer
