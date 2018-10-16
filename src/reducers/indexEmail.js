import * as types from '../constants/index'

var data = localStorage.getItem('id')
const initialState = data ? data : ''

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_INDEX:
            state = action.id;
            localStorage.setItem('id', state)
            return state
        default: return state
    }
}

export default reducer