import {ACTIONS_TYPE, UsersAddUserType, UsersDeleteUserType} from "./actions";

export type UserType = {
    userId: string,
    fio: string,
    post: string,
    place: string,
    isTeacher: boolean,
    isAdmin: boolean
}

type ActionType = UsersAddUserType | UsersDeleteUserType

export const userReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_USER:
            return [...state, action.payload]
        case ACTIONS_TYPE.DELETE_USER:
            return [...state].filter(user => user.userId !== action.userId)
        default:
            return state
    }
}