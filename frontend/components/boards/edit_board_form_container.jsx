import { connect } from "react-redux";
import EditBoardForm from "./edit_board_form";

import { updateBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  
    return {
    currentUser: state.entities.users[state.session.id],
    formTitle: "Edit your board"
    }
};
const mapDispatchToProps = dispatch => ({
    processForm: board => dispatch(updateBoard(board)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);