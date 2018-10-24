import * as types from './../constants/index'
import randomstring from 'randomstring'

// var email1 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'Although the course has formally finished and will close on September 26, you will be able to access all the course materials because edX archives them for your use. If you did not manage to finish, consider enrolling again for the next course, which will start again for its 10th run on October 9. Until the course begins again, you can continue discussing grammar by joining the Facebook page that we have created for students who have enrolled in the course. Click here or paste the following link into your browser to join: https://www.facebook.com/groups/1111019299043515/'}
// var email2 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'Even if you did finish, you are more than welcome to join us again, as Melissa and Kevin, and Philip and Mary have done many times. They enjoy immensely the camaraderie and intellectual challenge on the board and contribute so valuably to the board. One of the initiatives that has greatly pleased us is when a student does the course in tandem with a friend. Our favourite case was a student who ‘bonded’ with his dad.'}
// var email3 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'Don’t forget that the weekly quizzes are all due on September 26 (on the Course page under the Quiz links, you can see the exact due date/time for your timezone).'}
// var email4 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'The feedback reflections that you posted this week have made us very happy. I am personally thrilled that we have made such an impact on you and urge those of you who haven’t checked the board for yourselves to check it now to affirm the value of the course for you. It’s feedback like this, where you talk about your increasing confidence in your writing and your curiosity to learn more about writing, that makes us so happy to repeat each run of the course.'}
// var email5 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'Amber says: As always, it has been a pleasure to meet so many students on the discussion board united by a shared love of language and learning. I hope that you have found Write101x useful, enjoyable, and interesting and that you will be able to consolidate and use your new knowledge and skills to achieve your writing goals, whatever they may be.'}
// var email6 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'Megan says: I would like to thank students for participating so enthusiastically and respectfully on the discussion board, and I wish everyone the best for their future.'}
// var email7 = { id: randomstring.generate(), composer: 'Noname', subject: 'test', time : Math.floor(Math.random() * 59 + 1), content: 'For the second year in a row, an article that I wrote about language for The Conversation is to be published in their 2018 Yearbook. Its title is ‘On the horror and pleasure of misused words: From mispronunciation to malapropism’ and it was chosen as one of 50 from 4,211 articles published this year. If you’d like to read it, go to https://theconversation.com/profiles/roslyn-petelin-311643/articles.'}
// var emailContent = [];
// emailContent.push(email1)
// emailContent.push(email2)
// emailContent.push(email3)
// emailContent.push(email4)
// emailContent.push(email5)
// emailContent.push(email6)
// emailContent.push(email7)
// localStorage.setItem('emails', JSON.stringify(emailContent));

var data = JSON.parse(localStorage.getItem('emails'))
var initialState = data ? data : []

var findIndex = (emails, id) => {
    var result = -1
    emails.forEach((email, index) => {
        if (email.id === id) {
            result = index;
        }
    })
    return result
}

var reducer = (state = initialState, action) => {
    var id = '';
    var index = -1;
    var substr = JSON.parse(localStorage.getItem('trash'))
    if (substr == null) substr = [];
    var updateState = JSON.parse(localStorage.getItem('emails'))
    state = (state.length !== updateState.length)
        ? updateState
        : state;
    switch (action.type) {
        case types.SHOW_LIST_EMAIL:
            return state
        case types.MOVE_TO_TRASH:
            index = action.index;
            substr.push(state[index]);
            localStorage.setItem('trash', JSON.stringify(substr));
            state.splice(index, 1);
            localStorage.setItem('emails', JSON.stringify(state));
            return [...state]
        case types.SEND_EMAIL:
            var email = {
                id: randomstring.generate(),
                composer: action.sender,
                subject: action.subject,
                time: Math.floor(Math.random() * 59 + 1),
                content: action.text
            }
            console.log(action.sender + action.text)
            state.push(email)
            localStorage.setItem('emails', JSON.stringify(state));
            return [...state]
        case types.READ_INBOX:
            id = action.id;
            index = findIndex(state, id)
            console.log(action);
            localStorage.setItem('readMessage', JSON.stringify(state[index]));
            return [...state]
        default: return state
    }
}

export default reducer