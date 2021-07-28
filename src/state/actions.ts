import {v1} from "uuid";
import {UserType} from "./user-reducer";

// Объявление констант для экшинов
export enum ACTIONS_TYPE {
    ADD_USER = 'Users/ADD_USER',
    DELETE_USER = 'Users/DELETE_USER',
    CHANGE_USER_FIO = 'Users/CHANGE_USER_FIO',
}

// type action for add User
export type UsersAddUserType = {
    type: ACTIONS_TYPE.ADD_USER
    payload: UserType
};
// function action creator for add new User
export const usersAddUser = (fio: string, post: string = 'научный сотрудник', place: string = 'goi', isTeacher: boolean = false, isAdmin: boolean = false): UsersAddUserType => {
    return {type: ACTIONS_TYPE.ADD_USER, payload: {userId: v1(), fio, post, place, isTeacher, isAdmin}}
}

// type action for Delete User
export type UsersDeleteUserType = {
    type: ACTIONS_TYPE.DELETE_USER
    userId: string
}
// function action creator for Delete  User
export const usersDeleteUser = (userId: string): UsersDeleteUserType => ({type: ACTIONS_TYPE.DELETE_USER, userId})

// type action for Change fio User
export type UsersChangeFioType = {
    type: ACTIONS_TYPE.CHANGE_USER_FIO
    userId: string
    fio: string
}
// function action creator for Change  User FIO by id
export const usersChangeUserFio = (userId: string, fio: string): UsersChangeFioType => ({
    type: ACTIONS_TYPE.CHANGE_USER_FIO,
    fio,
    userId
})

