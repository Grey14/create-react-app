import { ON_SELECTED } from '../constants/actionTypes';

const selected = (state = "", action) => {
    //console.log(state);
    switch (action.type) {
        case ON_SELECTED:
            return action.selected;
        default:
            return state;
    }
}

export default selected;