import React from "react";
import { connect } from "react-redux";
import EditBoardForm from "./edit_board_form";

import { updateBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

// const mapStateToProps = (state, ownProps) => ( {
//     currentUser: state.entities.users[state.session.id],
//     board: state.entities.boards[state.ui.objectId],
//     // board: state.entities.boards[state.ui.boardId],
//     // board: state.entities.boards[state.boardId],
//     // board: Object.values(state.entities.board), NO
//     // board: state.entities.boards[state.objectId], 
//     // board: state.entities.boards[ownProps.match.boardId],
//     errors: state.errors.board,
//     formTitle: "Edit your board"
// });
const mapStateToProps = (state, ownProps) => {
    // debugger;
  
    return {
    // currentUser: state.entities.users[state.session.id],
    // board: state.entities.boards[state.ui.objectId],
        // board: state.entities.boards[state.match.ui.objectId],
    // boardId: state.entities.boards[state.ui.objectId],
    // board: state.entities.boards[state.ui.boardId],
    // board: state.entities.boards[state.boardId],
    // board: Object.values(state.entities.board), NO
    // board: state.entities.boards[state.objectId], 
    // board: state.entities.boards[ownProps.match.boardId],
    errors: state.errors.board,
    formTitle: "Edit your board"
    }
};
const mapDispatchToProps = dispatch => ({
    processForm: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    // openDeleteBoard: (boardId) => dispatch(openModal('delete-board', boardId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);