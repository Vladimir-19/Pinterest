import * as BoardAPIUtil from '../util/board_api_util'

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOAR = 'REMOVE_BOAR';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveBoards = baords => ({
    type: RECEIVE_BOARDS,
    boards 
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board 
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
    .then(board => dispatch(receiveBoard(board)))
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
        board => dispatch(receiveBoard(board))
    )
};
