import {userReducer, UserType} from "./user-reducer";
import {v1} from "uuid";
import {usersAddUser} from "./actions";

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
            fio: ' Мальцева',
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