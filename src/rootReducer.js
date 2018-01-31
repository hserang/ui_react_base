import { combineReducers } from 'redux'
import appReducer from './components/App/reducer'
import aboutReducer from './components/About/reducer'
import contactReducer from './components/Contact/reducer'
import homeReducer from './components/Home/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  about: aboutReducer,
  contact: contactReducer,
  home: homeReducer
})

export default rootReducer
