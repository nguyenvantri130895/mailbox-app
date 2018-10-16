import * as types from './../constants/index'

export const listEmail = () => {
    return {
        type: types.LIST_EMAIL
    }
}

export const changeIndex = (id) => {
    return {
        type: types.CHANGE_INDEX,
        id
    }
}