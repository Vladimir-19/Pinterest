// import { connect } from 'react-redux';
// import { openModal, closeModal } from '../../actions/modal_actions';

// import { fetchPins } from '../../actions/pin_actions';
// import { fetchBoards } from '../../actions/board_actions';
// import { createBoard } from '../../actions/board_actions';
// import CreateBoard from './create_board';

// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id],
//     pins: Object.values(state.entities.pins),
//     boards: Object.values(state.entities.boards),
//     errors: state.errors.session
// });

// const mapDispatchToProps = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
//     fetchPins: () => dispatch(fetchPins()),
//     fetchBoards: () => dispatch(fetchBoards()),
//     createBoard: (board) => dispatch(createBoard(board)),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CreateBoard);
import { connect } from "react-redux";
// import React from "react";

import { createBoard } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
// import { fetchBoards } from "../../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import CreateBoardForm from "./create_board";
import { fetchBoard } from "../../util/board_api_util";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    board: { "title": "", "description": "", "secret": false },
    // boards: Object.values(state.entities.boards),
    // pins: Object.values(state.entities.pins),
    errors: state.errors.board,
    formType: "Create board",
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    processForm: board => dispatch(createBoard(board)), //error???
    closeModal: () => dispatch(closeModal()),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoard: () => dispatch(fetchBoard()),
    // createBoard: (board) => dispatch(createBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);