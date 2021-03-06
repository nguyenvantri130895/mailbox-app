import * as types from '../constants'

var data = localStorage.getItem('index')
const initialState = data ? data : ''

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_INDEX:
            console.log(action)
            state = action.index;
            localStorage.setItem('index', state)
            return state
        default: return state
    }
}

export default reducer