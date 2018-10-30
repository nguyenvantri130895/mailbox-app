import {combineReducers} from 'redux'
import emails from './emails'
import trash from './trash'
import drafts from './drafts'
import sort from './sort'
import search from './search'
import reply from './reply'
import sent from './sent'
import draftCompose from './draftCompose'
import forward from './forward'

const reducer = combineReducers({
    emails,
    trash,
    drafts,
    sort,
    search,
    reply,
    sent,
    draftCompose,
    forward
})

export default reducer