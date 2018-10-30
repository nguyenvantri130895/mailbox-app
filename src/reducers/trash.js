import * as types from './../constants/index'
import randomstring from 'randomstring'

// var trash = { id: randomstring.generate(), subject: 'test', composer: 'Noname', time : Math.floor(Math.random() * 59 + 1), content: 'The world of democracy, rule of law and human rights that our parents and grandparents have built is truly precious, and truly fragile. Its time to stand on the line and call on our institutions to defend truth and justice to teach the world a critical lesson: even the most powerful man in the world is not above the law.'}
// var trashContent = [];
// trashContent.push(trash);
// localStorage.setItem('trash', JSON.stringify(trashContent));


var data = JSON.parse(localStorage.getItem('trash'))
var initialState = data ? data : []

var findIndex = (trash, id) => {
    var result = -1
    trash.forEach((trashEmail, index) => {
        if (trashEmail.id === id) {
            result = index;
        }
    })
    return result
}

var reducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    var inbox = JSON.parse(localStorage.getItem('emails'))
    if (inbox == null) inbox = [];
    var updateState = JSON.parse(localStorage.getItem('trash'));
    state = (state.length !== updateState.length)
        ? updateState
        : state;
    switch (action.type) {
        case types.SHOW_LIST_TRASH:
            return state
        case types.MOVE_TO_INBOX:
            id = action.id;
            index = findIndex(state, id);
            inbox.push(state[index]);
            localStorage.setItem('emails', JSON.stringify(inbox));
            state.splice(index, 1);
            localStorage.setItem('trash', JSON.stringify(state));
            return [...state]
        case types.DELETE_PERMANENTLY:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('trash', JSON.stringify(state));
            return [...state]
        case types.READ_TRASH:
            id = action.id;
            index = findIndex(state, id)
            console.log(action);
            localStorage.setItem('readMessage', JSON.stringify(state[index]));
            return [...state]
        default: return state
    }
}

export default reducer