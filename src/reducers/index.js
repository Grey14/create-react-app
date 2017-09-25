import { combineReducers } from 'redux'
import dropdowns from './dropdowns'
import selected from './selected'

//跟state 名稱有關
const reducerApp = combineReducers({
  dropdowns,
  selected
})

export default reducerApp