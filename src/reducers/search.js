import * as types from '../constants'

var initialState = ''

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_EMAIL:
            return action.keyword.toLowerCase()
        default: return state
    }
}

export default reducer;