import * as types from '../constants'

var data = localStorage.getItem('id')
const initialState = data ? data : ''

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ID:
            console.log(action)
            state = action.id;
            localStorage.setItem('id', state)
            return state
        default: return state
    }
}

export default reducer