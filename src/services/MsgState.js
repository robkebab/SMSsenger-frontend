import {atom} from 'recoil'

export const messageState = atom({
    key: "messageState",
    default: []
})

export const filterState = atom({
    key: "filterState",
    default: false
})

export const filteredMessagesState = atom({
    key: "filteredMessagesState",
    default: []
})