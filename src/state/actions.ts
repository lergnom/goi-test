import {v1} from "uuid";
import {UserType} from "./user-reducer";

// Объявление констант для экшинов
export enum ACTIONS_TYPE {
    ADD_USER = 'Users/ADD_USER',
    DELETE_USER = 'Users/DELETE_USER'
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