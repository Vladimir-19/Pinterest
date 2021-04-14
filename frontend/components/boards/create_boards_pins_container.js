import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';

import { pinToBoard } from '../../actions/join_boards_pins_actions';
import CreateBoardsPinsForm from './create_boards_pins';


const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const allBoards = Object.values(state.entities.boards).filter(board => (
        board.userId === state.session.id
    ));

    return {
        currentUserId,
        errors: state.errors.session,
        pins: (state.entities.pins),
        allBoards,
    }
};


const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchBoards: () => dispatch(fetchBoards()),
    pinToBoard: boardPin => dispatch(pinToBoard(boardPin))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardsPinsForm));