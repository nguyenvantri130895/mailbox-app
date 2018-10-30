import * as types from './../constants/index'

export const showListEmail = () => {
    return {
        type: types.SHOW_LIST_EMAIL
    }
}

export const showListTrash = () => {
    return {
        type: types.SHOW_LIST_TRASH
    }
}

export const showListDraft = () => {
    return {
        type: types.SHOW_LIST_DRAFT
    }
}

export const showListSent = () => {
    return {
        type: types.SHOW_LIST_SENT
    }
}

export const moveToTrash = (id) => {
    return {
        type: types.MOVE_TO_TRASH,
        id
    }
}

export const moveToInbox = (id) => {
    return {
        type: types.MOVE_TO_INBOX,
        id
    }
}

export const deletePermanently = (id) => {
    return {
        type: types.DELETE_PERMANENTLY,
        id
    }
}

export const sortEmail = (sort) => {
    return {
        type: types.SORT_EMAIL,
        sort
    }
}

export const searchEmail = (keyword) => {
    return {
        type: types.SEARCH_EMAIL,
        keyword
    }
}

export const sendEmail = (id, receiver, content, subject) => {
    return {
        type: types.SEND_EMAIL,
        id,
        receiver,
        content,
        subject,
    }
}

export const receiveEmail = (composer, text, subject) => {
    return {
        type: types.RECEIVE_EMAIL,
        composer,
        text,
        subject,
    }
}

export const saveToDraft = (receiver, content, subject) => {
    return {
        type: types.SAVE_TO_DRAFT,
        receiver,
        content,
        subject,
    }
}

export const deleteDraft = (id) => {
    return {
        type: types.DELETE_DRAFT,
        id
    }
}

export const deleteSent = (id) => {
    return {
        type: types.DELETE_SENT,
        id
    }
}

export const readInbox = (id) => {
    return {
        type: types.READ_INBOX,
        id
    }
}

export const readTrash = (id) => {
    return {
        type: types.READ_TRASH,
        id
    }
}

export const readSent = (id) => {
    return {
        type: types.READ_SENT,
        id
    }
}

export const reply = (composer, subject) => {
    return {
        type: types.REPLY,
        composer,
        subject
    }
}

export const forward = (composer, subject, content) => {
    return {
        type: types.FORWARD,
        composer,
        subject,
        content
    }
}

export const draft = (id, receiver, subject, content) => {
    return {
        type: types.DRAFT,
        id,
        receiver,
        subject,
        content
    }
}
