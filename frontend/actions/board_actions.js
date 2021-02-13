import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
})

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards 
});

const receiveBoard = payload => ({
    type: RECEIVE_BOARD,
    // board 
    payload
});

const removeBoar = boardId => ({
    type: REMOVE_BOAR,
    boardId
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors 
});
// thunk
export const fetchBoards = () => dispatch => {
    return BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards))) 
};

export const fetchBoard = boardId => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(payload => dispatch(receiveBoard(payload)))
};

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board).then(
        board => (dispatch(receiveBoard(board))),
        err => (dispatch(receiveSessionErrors(err.responseJSON))
        ))
};

export const deleteBoard = boardId => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(board => dispatch(removeBoar(board.id)))
};

export const updateBoard = board => dispatch => {
    return BoardAPIUtil.updateBoard(board).then(
        board => dispatch(receiveBoard(board)),
        err => dispatch(receiveBoardErrors(err.responseJSON))
        // // err => (dispatch(receiveSessionErrors(err.responseJSON)))
    )
};

// export const updateBoard = board => dispatch => (
//     BoardAPIUtil.updateBoard(board).then(
//         board => dispatch(receiveBoard(board)),
//         err => dispatch(receiveBoardErrors(err.responseJSON))
//     )
// );