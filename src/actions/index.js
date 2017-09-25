import dropdown from '../api/dropdown';
import * as types from '../constants/actionTypes';
import _dropdown from '../api/data.json'

const receiveDropdown = dropdowns => ({
  type: types.RECEIVE_DROPDOWN,
  dropdowns: dropdowns
})

// export const getAllDropdowns= ()=>dispatch=>{
//   dropdown.getDropdown(dropdowns => {
//     dispatch(receiveDropdown(dropdowns))
//   })
// }

export const getAllDropdowns = dropdowns => ({
  type: types.RECEIVE_DROPDOWN,
  dropdowns: _dropdown
})

export const onSelectChange = selected => ({
  type: types.ON_SELECTED,
  selected
})