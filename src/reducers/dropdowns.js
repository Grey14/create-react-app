import { RECEIVE_DROPDOWN } from '../constants/actionTypes';

const dropdowns = (state = [], action) => {
    console.log(action.dropdowns);
    switch (action.type) {
        case RECEIVE_DROPDOWN:
            return action.dropdowns;
        default:
            return state;
    }
}

export default dropdowns;