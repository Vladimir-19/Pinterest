import {
    connect
} from 'react-redux';

import {
    openModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

import BoardShow from './board_show';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    pins: state.entities.pins,
    modal: state.ui.modal,
    board: state.entities.boards[ownProps.match.params.boardId]
    // board: state.entities.boards[board.id]
});
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
    openModal: modal => dispatch(openModal(modal)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards()),
    openEditBoard: boardId => dispatch(openModal('edit-board', boardId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardShow);