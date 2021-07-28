import {ACTIONS_TYPE, UsersAddUserType} from "./actions";

export type UserType = {
    userId: string,
    fio: string,
    post: string,
    place: string,
    isTeacher: boolean,
    isAdmin: boolean
}

type ActionType = UsersAddUserType

export const userReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_USER:
            return [...state]
        default:
            return state
    }
}