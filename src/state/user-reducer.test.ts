import {userReducer, UserType} from "./user-reducer";
import {v1} from "uuid";
import {
    usersAddUser,
    usersChangeUserFio, usersChangeUserPlace,
    usersChangeUserPost, usersChangeUserIsTeacher,
    usersDeleteUser, usersChangeUserIsAdmin
} from "./actions";

let user2Id: string
let startState: Array<UserType>

beforeEach(() => {
    user2Id = v1()
    startState = [
        {
            userId: v1(),
            fio: 'Асмоловский',
            post: 'ведущий программист',
            place: 'отдел комплектования',
            isTeacher: true,
            isAdmin: true
        },
        {
            userId: user2Id,
            fio: 'Мальцева',
            post: 'заведующая',
            place: 'отдел информации',
            isTeacher: false,
            isAdmin: false
        }
    ]
})

test('Add new user', () => {
    const endState = userReducer(startState, usersAddUser('Иванов', 'ведущий сотрудник', 'лаборатория 26', false, false))

    expect(endState.length).toBe(3)
    expect(endState[2].fio).toBe('Иванов')
})

test('Delete user', () => {
    const endState = userReducer(startState, usersDeleteUser(user2Id))

    expect(endState.length).toBe(1)
    expect(endState[0].fio).toBe('Асмоловский')
})

test('Change user fio', () => {
    const endState = userReducer(startState, usersChangeUserFio(user2Id, 'Логинов'))

    expect(endState.length).toBe(2)
    expect(endState[1].fio).toBe('Логинов')
})

test('Change user post', () => {
    const endState = userReducer(startState, usersChangeUserPost(user2Id, 'сотрудник'))

    expect(endState.length).toBe(2)
    expect(endState[1].post).toBe('сотрудник')
})

test('Change user place', () => {
    const endState = userReducer(startState, usersChangeUserPlace(user2Id, 'лаборатория'))

    expect(endState.length).toBe(2)
    expect(endState[1].place).toBe('лаборатория')
})


test('Change user isTeacher', () => {
    const endState = userReducer(startState, usersChangeUserIsTeacher(user2Id, true))

    expect(endState.length).toBe(2)
    expect(endState[1].isTeacher).toBeTruthy()
})

test('Change user isAdmin', () => {
    const endState = userReducer(startState, usersChangeUserIsAdmin(user2Id, true))

    expect(endState.length).toBe(2)
    expect(endState[1].isAdmin).toBeTruthy()
})