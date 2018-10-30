import * as types from '../constants'

var initialState = {}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FORWARD:
            console.log(action);
            return {
                composer: action.composer,
                subject: action.subject,
                content: action.content
            }
        default: return state
    }
}

export default reducer;