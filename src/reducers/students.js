import {
    RECEIVE_STUDENTS,
    CLEAR_STUDENTS,
    FILTER_STUDENTS
} from '../constants/actionTypes';

// @Reducer
// state(狀態)一開始的值是空陣列`state=[]`
const students = (state = [], action) => {
    switch (action.type) {
        case CLEAR_STUDENTS:
            return [];
        case RECEIVE_STUDENTS:
            return action.students;
        case FILTER_STUDENTS:
            {
                console.log(action);
                //console.log(action.students.filter(row => Object.keys(row).some(key => String(row[key]).toLowerCase().indexOf(action.filterKey) > -1)));
                return [...action.students.filter(r=>r.Name==="Zhang Xiaochun")]
            }
        default:
            return state;
    }
}
export default students

