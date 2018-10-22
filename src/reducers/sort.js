import * as types from '../constants'

var initialState = {
    by: 'time',
    value: 1 // 1: increase, -1: decrease
}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_EMAIL:
            return {
                by: action.sort.by,
                value: action.sort.value
            }
        default:
            return state
    }
}

export default reducer;