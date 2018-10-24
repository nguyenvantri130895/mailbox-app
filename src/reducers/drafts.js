import * as types from './../constants/index'
import randomstring from 'randomstring'

// var email1 = { id: randomstring.generate(), subject: 'draft', composer: 'Draft', time: Math.floor(Math.random() * 59 + 1), content: 'Although the course has formally finished and will close on September 26, you will be able to access all the course materials because edX archives them for your use. If you did not manage to finish, consider enrolling again for the next course, which will start again for its 10th run on October 9. Until the course begins again, you can continue discussing grammar by joining the Facebook page that we have created for students who have enrolled in the course. Click here or paste the following link into your browser to join: https://www.facebook.com/groups/1111019299043515/' }
// var emailContent = [];
// emailContent.push(email1)
// localStorage.setItem('drafts', JSON.stringify(emailContent));

var data = JSON.parse(localStorage.getItem('drafts'))
var initialState = data ? data : []

var reducer = (state = initialState, action) => {
    var index;
    switch (action.type) {
        case types.SHOW_LIST_DRAFT:
            return state
        case types.DELETE_DRAFT:
            index = action.index
            state.splice(index, 1);
            localStorage.setItem('drafts', JSON.stringify(state));
            return [...state]
        case types.SAVE_TO_DRAFT:
            var draft = {
                id: randomstring.generate(),
                composer: 'Draft',
                subject: action.subject,
                time: Math.floor(Math.random() * 59 + 1),
                content: action.text
            }
            console.log(action.text)
            state.push(draft)
            localStorage.setItem('drafts', JSON.stringify(state));
            return [...state]
        default: return state
    }
}

export default reducer