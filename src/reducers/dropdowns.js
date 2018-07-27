import { RECEIVE_DROPDOWN } from '../constants/actionTypes';

const dropdowns = (state = [], action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case RECEIVE_DROPDOWN:
            return action.dropdowns;
        default:
            return state;
    }
}

export default dropdowns;