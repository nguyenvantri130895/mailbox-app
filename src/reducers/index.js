import {combineReducers} from 'redux'
import emails from './emails'
import index from './indexEmail'

const reducer = combineReducers({
    emails,
    index
})

export default reducer