import { RECEIVE_USER } from "../actions/user_actions";
import { 
    RECEIVE_ALL_BOARDS_PINS,
    RECEIVE_BOARD_PIN,
    REMOVE_BOARD_PIN,
} from "../actions/join_boards_pins_actions";

const JoinBoardsPinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign(newState, action.payload.boardsPins);
        case RECEIVE_ALL_BOARDS_PINS:
            return action.boardsPins
        case RECEIVE_BOARD_PIN:
            return Object.assign({}, newState, {[actions.boardPin.id]: action.boardPin })
        case REMOVE_BOARD_PIN:
            delete newState[actions.boardPinId];
            return newState;
        default:
            return state;
    }
}

export default JoinBoardsPinsReducer;