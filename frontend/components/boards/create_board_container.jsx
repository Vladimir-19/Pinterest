import { connect } from "react-redux";

import { createBoard } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import CreateBoardForm from "./create_board";
import { fetchBoard } from "../../util/board_api_util";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    board: { "title": "", "description": "" },
    errors: state.errors.session,
    formType: "Create board",
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    processForm: board => dispatch(createBoard(board)), 
    closeModal: () => dispatch(closeModal()),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoard: () => dispatch(fetchBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);