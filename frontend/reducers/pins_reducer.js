import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_BOARD } from "../actions/board_actions";

// const PinReducer = (state ={}, action) => {
//     Object.freeze(state);

//     let nextState = Object.assign({}, state);

//     switch (action.type) {
//         // case RECEIVE_USER:
//         //     return Object.assign(nextState, action.payload.pins);
//         // case RECEIVE_BOARD:
//         //     // return Object.assign(nextState, action.payload.pins);
//         case RECEIVE_PIN:
//             // return {[action.pin.id]: action.pin}
//             return Object.assign(nextState, action.pin);
//         case RECEIVE_PINS:
//             // return Object.assign({}, state, action.pins)
//             return action.pins;
//         case REMOVE_PIN:
//             delete nextState[action.pinId];
//             return nextState;
//         default:
//             return state;
//     }
// }

// export default PinReducer;

const PinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign(nextState, action.payload.pins);
        case RECEIVE_BOARD:
            return Object.assign(nextState, action.payload.pins);
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return Object.assign(nextState, action.pin);
        case REMOVE_PIN:
            delete nextState[action.pinId];
            return nextState;
        default:
            return oldState;
    }
}

export default PinsReducer;