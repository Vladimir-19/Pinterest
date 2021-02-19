import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';

import { pinToBoard } from '../../actions/join_boards_pins_actions';
import CreateBoardsPinsForm from './create_boards_pins';


const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const pin = state.entities.pins[state.ui.objectId];
    const allBoards = Object.values(state.entities.boards);

    return {
        // currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        currentUserId,
        pin,
        allBoards,
    }
};


const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchBoards: () => dispatch(fetchBoards()),
    pinToBoard: boardPin => dispatch(pinToBoard(boardPin))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardsPinsForm);