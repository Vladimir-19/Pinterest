import {
    RECEIVE_BOARD,
    RECEIVE_BOARDS,
    REMOVE_BOARD
} from '../actions/board_actions';
import {RECEIVE_BOARD_PIN} from '../actions/join_boards_pins_actions';

const BoardReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARD:
            return Object.assign(nextState, action.payload.boards)
        case RECEIVE_BOARDS:
            return action.boards
        case REMOVE_BOARD:
            delete nextState[action.boardId];
            return nextState
        default:
            return state;
    }
}

export default BoardReducer;