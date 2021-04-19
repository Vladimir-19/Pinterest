import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_BOARD } from "../actions/board_actions";

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