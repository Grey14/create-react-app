import person from '../api/person';
import * as types from '../constants/actionTypes';
import _students from '../api/student.json';
export const getAllStudents= ()=>{
  return {
    type: types.RECEIVE_STUDENTS,
    students: _students
  }
}

export const clearStudents= ()=>{
  return {
    type: types.CLEAR_STUDENTS
  }
}

export const filterStudents= (filterKey)=>{
  return {
    type: types.FILTER_STUDENTS,
    filterKey,
    students: _students
  }
}