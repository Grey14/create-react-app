import dropdown from '../api/dropdown';
import * as types from '../constants/actionTypes';

//private
const receiveDropdown = dropdowns => ({
  type: types.RECEIVE_DROPDOWN,
  dropdowns: dropdowns
})

//透過 dispatcher 去發出一個 action
export const getAllDropdowns = () => dispatch => {
  //api of drowndown
  dropdown.getDropdown(dropdowns => {
    dispatch(receiveDropdown(dropdowns))
  })
}

// export const getAllDropdowns = function getAllDropdowns() {
//   return function (dispatch) {
//     dropdown.getDropdown(function (dropdowns) {
//       dispatch(receiveDropdown(dropdowns));
//     });
//   };
// };

const selectChange = selected => ({
  type: types.ON_SELECTED,
  selected
})


export const onSelectChange = (selected) => dispatch => {
  dispatch(selectChange(selected))
}


// export const onSelectChange = selected => ({
//   type: types.ON_SELECTED,
//   selected
// })