import React from "react";
import { connect } from "react-redux";
import EditBoardForm from "./edit_board_form";

import { updateBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    board: state.entities.boards[state.ui.objectId],
    // board: Object.values(state.entities.board), NO
    // board: state.entities.boards[state.objectId], 
    // board: state.entities.boards[ownProps.match.boardId],
    errors: state.errors.board,
    formTitle: "Edit your board"
});

const mapDispatchToProps = dispatch => ({
    processForm: board => dispatch(updateBoard(board)),
    openDeleteBoard: (boardId) => dispatch(openModal('delete-board', boardId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);