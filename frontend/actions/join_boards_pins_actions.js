import * as BoardPinAPIUtil from '../util/join_boards_pins_api_util';

export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';
export const RECEIVE_BOARD_PIN_ERRORS = "RECEIVE_BOARD_PIN_ERRORS";

const receiveBoardPin = board =>  ({
    type: RECEIVE_BOARD_PIN,
    board
});

const removeBoardPin = boardPinId => ({
    type: RECEIVE_BOARD_PIN,
    boardPinId
});

const receiveBoardPinErrors = errors => ({
    type: RECEIVE_BOARD_PIN_ERRORS,
    errors
})

export const pinToBoard = boardPin => dispatch => {
    return BoardPinAPIUtil.pinToBoard(boardPin)
    .then(board => dispatch(receiveBoardPin(board))),
    err => dispatch(receiveBoardPinErrors(err.responseJSON))
};

// not working
export const deletePinOnBoard = (boardPinId) => {
    return BoardPinAPIUtil.deletePinOnBoard(boardPinId)
        .then(boardPin => dispatch(receiveBoardPin(boardPin.id)))
    // .then(board => dispatch(removeBoardPin(board)))
};