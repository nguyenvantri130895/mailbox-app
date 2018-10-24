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

export const getId = (id) => {
    return {
        type: types.GET_ID,
        id
    }
}

export const getIndex = (index) => {
    return {
        type: types.GET_INDEX,
        index
    }
}

export const moveToTrash = (index) => {
    return {
        type: types.MOVE_TO_TRASH,
        index
    }
}

export const moveToInbox = (index) => {
    return {
        type: types.MOVE_TO_INBOX,
        index
    }
}

export const deletePermanently = (index) => {
    return {
        type: types.DELETE_PERMANENTLY,
        index
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

export const sendEmail = (sender, text, subject) => {
    return {
        type: types.SEND_EMAIL,
        sender,
        text,
        subject
    }
}

export const saveToDraft = (text, subject) => {
    return {
        type: types.SAVE_TO_DRAFT,
        text,
        subject
    }
}

export const deleteDraft = (index) => {
    return {
        type: types.DELETE_DRAFT,
        index
    }
}

export const readInbox = (id) => {
    return {
        type: types.READ_INBOX,
        id
    }
}

export const readTrash = () => {
    return {
        type: types.READ_TRASH,
    }
}

export const readDraft = () => {
    return {
        type: types.READ_DRAFT,
    }
}
