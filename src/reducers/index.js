// import { combineReducers } from 'redux'
// import student from './student'
// //這裡作合併reducer的動作
// export default combineReducers({
//     student
// })

import { combineReducers } from 'redux'
import students from './students'

const reducerApp = combineReducers({
  students
})

export default reducerApp