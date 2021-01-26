import count from "./count"
import covid from "./covid"
import user from "./user"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({count, covid, user})

export default rootReducer