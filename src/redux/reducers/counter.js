import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actionTypes';


const initialState = {
    count: 0
}

export default function counterReducer (state = initialState, action) {
    switch(action.type) {
        case INCREMENT_COUNT:
            return { count: state.count + 1}
        case DECREMENT_COUNT:
            return { count: state.count - 1 }
        default:
            return state
     }
}