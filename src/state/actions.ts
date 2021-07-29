import {v1} from "uuid";
import {UserType} from "./user-reducer";

// Объявление констант для экшенов
export enum ACTIONS_TYPE {
    ADD_USER = 'Users/ADD_USER',
    DELETE_USER = 'Users/DELETE_USER',
    CHANGE_USER_FIO = 'Users/CHANGE_USER_FIO',
    CHANGE_USER_POST = 'Users/CHANGE_USER_POST',
    CHANGE_USER_PLACE = 'Users/CHANGE_USER_PLACE',
    CHANGE_USER_IS_TEACHER = 'Users/CHANGE_USER_IS_TEACHER',
    CHANGE_USER_IS_ADMIN = 'Users/CHANGE_USER_IS_ADMIN',
}

export enum CHANGE_FIELD_TYPE {
    POST = 'post',
    PLACE = 'place',
}

// type action for add User
export type UsersAddUserType = {
    type: ACTIONS_TYPE.ADD_USER,
    payload: UserType,
};
// function action creator for add new User
export const usersAddUser = (fio: string, post: string = 'научный сотрудник', place: string = 'goi', isTeacher: boolean = false, isAdmin: boolean = false): UsersAddUserType => {
    return {type: ACTIONS_TYPE.ADD_USER, payload: {userId: v1(), fio, post, place, isTeacher, isAdmin}}
}

// type action for Delete User
export type UsersDeleteUserType = {
    type: ACTIONS_TYPE.DELETE_USER,
    userId: string,
}
// function action creator for Delete  User
export const usersDeleteUser = (userId: string): UsersDeleteUserType => ({type: ACTIONS_TYPE.DELETE_USER, userId})

// type action for Change fio User
export type UsersChangeFioType = {
    type: ACTIONS_TYPE.CHANGE_USER_FIO,
    userId: string,
    fio: string,
}
// function action creator for Change  User FIO by id
export const usersChangeUserFio = (userId: string, fio: string): UsersChangeFioType => ({
    type: ACTIONS_TYPE.CHANGE_USER_FIO,
    fio,
    userId,
})


// type action for Change any param
export type UsersChangeUserPostType = {
    type: ACTIONS_TYPE.CHANGE_USER_POST,
    userId: string,
    post: string,
}
//function action creator for Change Post User by id
export const usersChangeUserPost = (userId: string, post: string): UsersChangeUserPostType => {
    return {type: ACTIONS_TYPE.CHANGE_USER_POST, userId, post}
}

// type action for Change User Place by id
export type UsersChangeUserPlaceType = {
    type: ACTIONS_TYPE.CHANGE_USER_PLACE,
    userId: string,
    place: string,
}
//function action creator for Change Place User by id
export const usersChangeUserPlace = (userId: string, place: string): UsersChangeUserPlaceType => ({
    type: ACTIONS_TYPE.CHANGE_USER_PLACE,
    userId,
    place
})

// type action for Change User Place by id
export type  UsersChangeUserIsTeacherType = {
    type: ACTIONS_TYPE.CHANGE_USER_IS_TEACHER,
    userId: string,
    isTeacher: boolean
}
//function action creator for Change isTeacher User by id
export const usersChangeUserIsTeacher = (userId: string, isTeacher: boolean): UsersChangeUserIsTeacherType => ({
    type: ACTIONS_TYPE.CHANGE_USER_IS_TEACHER,
    userId,
    isTeacher
})

// type action for Change User isAdmin by id
export  type UsersChangeUserIsAdminType = {
    type: ACTIONS_TYPE.CHANGE_USER_IS_ADMIN,
    userId: string,
    isAdmin: boolean
}
//function action creator for Change isAdmin User by id
export const usersChangeUserIsAdmin = (userId: string, isAdmin: boolean): UsersChangeUserIsAdminType => ({
    type: ACTIONS_TYPE.CHANGE_USER_IS_ADMIN,
    userId,
    isAdmin
})

