import dropdown from '../api/dropdown';
import * as types from '../constants/actionTypes';

const receiveDropdown = dropdowns => ({
  type: types.RECEIVE_DROPDOWN,
  dropdowns: dropdowns
})

export const getAllDropdowns= ()=>dispatch=>{
  dropdown.getDropdown(dropdowns => {
    dispatch(receiveDropdown(dropdowns))
  })
}

export const onSelectChange = selected => ({
  type: types.ON_SELECTED,
  selected
})