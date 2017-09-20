import {
    RECEIVE_STUDENTS,
    CLEAR_STUDENTS,
    TOGGLE_FILTER
} from '../constants/actionTypes';


import { combineReducers } from 'redux';

// // 一定要用bind 的樣子
// ShowFilter(event) {
//     const filterKey = event.target.value;
//     this.setState({
//         filterKey,
//         student: this.state.tempStudent.filter(row => Object.keys(row).some(key => String(row[key]).toLowerCase().indexOf(filterKey) > -1))
//     });

// }

// @Reducer
// state(狀態)一開始的值是空陣列`state=[]`


const student = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_STUDENTS:
            return {
                ...state,
                ...action.students
            }
        // case CLEAR_STUDENTS:
        //     {
        //         return [{
        //             students: [],
        //             filterKey: "",
        //         }, ...state]
        //     }
        default:
            return state
    }
}

// const studentApp = combineReducers({
//     student,
// })

export default student