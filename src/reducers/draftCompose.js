import * as types from '../constants'

var initialState = {}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DRAFT:
            return {
                id: action.id,
                receiver: action.receiver,
                subject: action.subject,
                content: action.content
            }
        default: return state
    }
}

export default reducer;