import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';

const PinReducer = (state ={}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PIN:
            return {[action.pin.id]: action.pin}
        case RECEIVE_PINS:
            return Object.assign({}, state, action.pins)
        case REMOVE_PIN:
            delete nextState[action.pinId];
            return nextState;
        default:
            return state;
    }
}

export default PinReducer;