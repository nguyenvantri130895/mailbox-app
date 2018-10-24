var data = JSON.parse(localStorage.getItem('readMessage'))
const initialState = data ? data : ''

const reducer = (state = initialState, action) => {
    return state
}

export default reducer