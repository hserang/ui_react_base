import axios from 'axios'
import * as actionTypes from './actionTypes'
import { LOADING_START, LOADING_FINISH } from '../App/actionTypes'

export const loadAboutMsg = () => {
  return dispatch => {
    dispatch({ type: LOADING_START })
    return axios
      .get(`/api/v1/about/msg`)
      .then(response => {
        dispatch({ type: LOADING_FINISH })
        dispatch({ type: actionTypes.ABOUT_MSG_LOAD_SUCCESS, data: response.data })
      })
      .catch(error => {
        dispatch({ type: LOADING_FINISH })
        if (error.response) {
          // status !== 2xx
          dispatch({ type: actionTypes.ABOUT_MSG_LOAD_FAIL, data: error.response.data })
        } else if (error.request) {
          // The request was made but no response was received
          // Handle this case base on your requirments
          dispatch({
            type: actionTypes.ABOUT_MSG_LOAD_FAIL,
            data: { msg: 'The request was made but no response was received' }
          })
        } else {
          // Something happened in setting up the request that triggered an Error
          // Handle this case base on your requirments
          dispatch({
            type: actionTypes.ABOUT_MSG_LOAD_FAIL,
            data: { msg: 'Something happened in setting up the request that triggered an Error' }
          })
        }
      })
  }
}
