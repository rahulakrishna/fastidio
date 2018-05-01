import {combineReducers} from 'redux'
import tweetsReducer from './tweetsReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    tweets:tweetsReducer,
    login:loginReducer
})
