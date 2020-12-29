import * as BoardPinAPIUtil from '../util/join_boards_pins_api_util';

export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

const receiveBoardPin = board =>  ({
    type: RECEIVE_BOARD_PIN,
    board
});

const removeBoardPin = boardPin => ({
    type: RECEIVE_BOARD_PIN,
    boardPin
});

export const pinToBoard = boardPin => dispatch => {
    return BoardPinAPIUtil.pinToBoard(boardPin)
    .then(board => dispatch(receiveBoardPin(board)))
};

// not working
export const deletePinOnBoard = (boardPin) => {
    return BoardPinAPIUtil.deletePinOnBoard(boardPin)
    .then(board => dispatch(receiveBoardPin(board)))
    // .then(board => dispatch(removeBoardPin(board)))
};