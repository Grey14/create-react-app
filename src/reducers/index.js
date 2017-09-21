// import { combineReducers } from 'redux'
// import student from './student'
// //這裡作合併reducer的動作
// export default combineReducers({
//     student
// })

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import students from './students'

const reducerApp = combineReducers({
  todos,
  visibilityFilter,
  students
})

export default reducerApp