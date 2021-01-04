import { RECEIVE_SINGLE_USER } from "../actions/user_actions";
import { 
    RECEIVE_BOARD_PIN,
    REMOVE_BOARD_PIN,
} from "../actions/join_boards_pins_actions";

const JoinBoardsPinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SINGLE_USER:
            return Object.assign(newState, action.payload.boardsPins);
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