import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

import { withRouter } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";
import { startLoading, stopLoading } from "../../actions/loading_actions"

import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => { 
    return {
    currentUser: state.entities.users[state.session.id],
    pins: state.entities.pins,
    board: state.entities.boards[ownProps.match.params.boardId],
    modal: state.ui.modal,
    loading: state.ui.loading
}};

const mapDispatchToProps = dispatch => ({
    fetchUser:  userId => dispatch(fetchUser(userId)), // to be continued

    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),

    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);