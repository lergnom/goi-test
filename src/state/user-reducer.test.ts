import {userReducer, UserType} from "./user-reducer";
import {v1} from "uuid";
import {usersAddUser, usersChangeUserFio, usersDeleteUser} from "./actions";

test('Add new user', () => {
    const startState: Array<UserType> = [
        {
            userId: v1(),
            fio: 'Асмоловский',
            post: 'отдел комплектования',
            place: 'ведущий программист',
            isTeacher: true,
            isAdmin: true
        },
        {
            userId: v1(),
            fio: 'Мальцева',
            post: 'отдел информации',
            place: 'заведущая отделом',
            isTeacher: false,
            isAdmin: false
        }
    ]
    const endState = userReducer(startState, usersAddUser('Иванов', 'ведущий сотрудник', 'лаборатория 26', false, false))

    expect(endState.length).toBe(3)
    expect(endState[2].fio).toBe('Иванов')

})

test('Delete user', () => {
    const user2Id = v1()
    const startState: Array<UserType> = [
        {
            userId: v1(),
            fio: 'Асмоловский',
            post: 'отдел комплектования',
            place: 'ведущий программист',
            isTeacher: true,
            isAdmin: true
        },
        {
            userId: user2Id,
            fio: 'Мальцева',
            post: 'отдел информации',
            place: 'заведущая отделом',
            isTeacher: false,
            isAdmin: false
        }
    ]
    const endState = userReducer(startState, usersDeleteUser(user2Id))

    expect(endState.length).toBe(1)
    expect(endState[0].fio).toBe('Асмоловский')

})

test('Change user fio', () => {
    const user2Id = v1()
    const startState: Array<UserType> = [
        {
            userId: v1(),
            fio: 'Асмоловский',
            post: 'отдел комплектования',
            place: 'ведущий программист',
            isTeacher: true,
            isAdmin: true
        },
        {
            userId: user2Id,
            fio: 'Мальцева',
            post: 'отдел информации',
            place: 'заведущая отделом',
            isTeacher: false,
            isAdmin: false
        }
    ]
    const endState = userReducer(startState, usersChangeUserFio(user2Id, 'Логинов'))

    expect(endState.length).toBe(2)
    expect(endState[1].fio).toBe('Логинов')

})