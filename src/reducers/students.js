import {
    RECEIVE_STUDENTS,
    CLEAR_STUDENTS,
    TOGGLE_FILTER
} from '../constants/actionTypes';

// @Reducer
// state(狀態)一開始的值是空陣列`state=[]`
const students = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_STUDENTS:
            // console.log("RECEIVE_STUDENTS");
            // return [
            //     ...state,
            //     student(undefined, action)
            // ]
            return action.students;
        default:
            return state;
    }
}
// const student = (state = {}, action) => {
//     switch (action.type) {
//         case RECEIVE_STUDENTS:
//             return {
//                 ...state,
//                 ...action.students
//             }
//         case CLEAR_STUDENTS:
//             {
//                 return [{
//                     students: [],
//                     filterKey: "",
//                 }, ...state]
//             }
//         default:
//             return state
//     }
// }
export default students

// ShowFilter(event) {
//     const filterKey = event.target.value;
//     this.setState({
//         filterKey,
//         student: this.state.tempStudent.filter(row => Object.keys(row).some(key => String(row[key]).toLowerCase().indexOf(filterKey) > -1))
//     });
// }