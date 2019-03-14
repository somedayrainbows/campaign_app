import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
  // these keys represent the app's state
  auth: authReducer
})
