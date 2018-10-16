import * as types from './../constants/index'

var data = JSON.parse(localStorage.getItem('emails'))
var initialState = data ? data : ""

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_EMAIL:
            return state
        default: return state
    }
}

export default reducer