import {
    connect
} from 'react-redux';

import {
    openModal, closeModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

import { withRouter } from "react-router-dom";
// import { fetchSingleUser } from "../../actions/user_actions";
import { fetchUser } from "../../actions/user_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions"

import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => { 
    // const board = Object.values(state.entities.boards).find(board =>
    //     board.id === ownProps.match.params.boardId
    // ) //|| { board: { id: 0 } };
    return {
    currentUser: state.entities.users[state.session.id],
    pins: state.entities.pins,
    board: state.entities.boards[ownProps.match.params.boardId],
    modal: state.ui.modal,
    loading: state.ui.loading
    // board: state.entities.boards[board.id]
    // board: state.entities.boards[ownProps.match.params.board.id]
    // board: state.entities.boards[board.id]
    // board: state.entities.boards[state.board.id]
    // board: state.entities.board.id
    // board: state.entities.board
}};
// const mapStateToProps = (state, ownProps) => {
//     const board = Object.values(state.entities.boards).find(board =>
//         board.title === ownProps.match.params.boardTitle
//     ) || { board: { id: 0 } };

//     return {
//         currentUser: state.entities.users[state.session.id],
//         board: state.entities.boards[board.id],
//         pins: state.entities.pins,
//         modal: state.ui.modal,
//         // boardsPins: Object.values(state.entities.boardsPins),
//         // errors: state.errors.board,
//     }
// };

const mapDispatchToProps = dispatch => ({
    fetchUser:  userId => dispatch(fetchUser(userId)), // to be continued

    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),

    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())

    // openEditBoard: board => dispatch(openModal('edit-board', board)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);