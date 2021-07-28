import {v1} from "uuid";

export enum ACTIONS_TYPE {
    ADD_USER = 'Users/ADD_USER',
}

export type UsersAddUserType = {
    type: ACTIONS_TYPE.ADD_USER
    payload: {
        id: string,
        fio: string,
        post: string,
        place: string,
        isTeacher: boolean,
        isAdmin: boolean
    }
};

export const usersAddUser = (fio: string, post: string = 'научный сотрудник', place: string = 'goi', isTeacher: boolean = false, isAdmin: boolean = false): UsersAddUserType => {
    return {type: ACTIONS_TYPE.ADD_USER, payload: {id: v1(), fio, post, place, isTeacher, isAdmin}}
}
