import * as actionTypes from './actionTypes'

export const initialState = {
  msg: 'MSG from redux: This is Home component',
  error: false,
  serverMsg: ''
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_MSG_LOAD_SUCCESS:
      return { ...state, error: false, serverMsg: action.data.msg }
    case actionTypes.HOME_MSG_LOAD_FAIL:
      return { ...state, error: true, serverMsg: action.data.msg }
    default:
      return state
  }
}

export default homeReducer
