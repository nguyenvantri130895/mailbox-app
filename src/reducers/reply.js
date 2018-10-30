import * as types from '../constants'

var initialState = {}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REPLY:
            console.log(action);
            return {
                composer: action.composer,
                subject: action.subject
            }
        default: return state
    }
}

export default reducer;