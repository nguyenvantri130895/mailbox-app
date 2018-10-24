import {combineReducers} from 'redux'
import emails from './emails'
import trash from './trash'
import drafts from './drafts'
import id from './idEmail'
import index from './indexEmail'
import sort from './sort'
import search from './search'
import readMessage from './readMessage'

const reducer = combineReducers({
    emails,
    trash,
    drafts,
    id,
    index,
    sort,
    search,
    readMessage
})

export default reducer