import person from '../api/person';
import * as types from '../constants/actionTypes';
import _students from '../api/student.json';
export const getAllStudents= ()=>{
  return {
    type: types.RECEIVE_STUDENTS,
    students: _students
  }
}

// const receiveStudents = students => ({
//   type: types.RECEIVE_STUDENTS,
//   students: students
// })

// export const getAllStudents = () => dispatch => {
//   person.getStudents(students => {
//     dispatch(receiveStudents(students))
//   })
// }

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}