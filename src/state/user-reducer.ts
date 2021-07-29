import {
    ACTIONS_TYPE,
    UsersAddUserType,
    UsersChangeFioType,
    UsersChangeUserPostType,
    UsersDeleteUserType
} from "./actions";

export type UserType = {
    userId: string,
    fio: string,
    post: string,
    place: string,
    isTeacher: boolean,
    isAdmin: boolean
}

type ActionType = UsersAddUserType | UsersDeleteUserType | UsersChangeFioType | UsersChangeUserPostType


export const userReducer = (state: Array<UserType>, action: ActionType)/*: Array<UserType>*/ => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_USER:
            return [...state, action.payload]
        case ACTIONS_TYPE.DELETE_USER:
            return [...state].filter(user => user.userId !== action.userId)
        case ACTIONS_TYPE.CHANGE_USER_FIO:
            return state.map(u => u.userId === action.userId ? {...u, fio: action.fio} : u)
        case ACTIONS_TYPE.CHANGE_USER_POST:
            return state.map(u => u.userId === action.userId ? {...u, post: action.post} : u)
        default:
            return state
    }
}
