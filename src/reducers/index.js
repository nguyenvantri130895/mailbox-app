import {combineReducers} from 'redux'
import emails from './emails'
import id from './idEmail'
import index from './indexEmail'
import trash from './trash'
import sort from './sort'
import search from './search'

const reducer = combineReducers({
    emails,
    id,
    index,
    trash,
    sort,
    search,
})

export default reducer