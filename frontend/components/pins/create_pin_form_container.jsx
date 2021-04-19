import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

import { fetchBoards } from "../../actions/board_actions";
import { createPin, fetchPins } from "../../actions/pin_actions";
import { pinToBoard } from "../../actions/join_boards_pins_actions";
import CreatePinForm from "./create_pin";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    pin: { "title": "", "description": "", url: "", photo: null },
    boards: Object.values(state.entities.boards).filter(board => (
        board.userId === state.session.id
    )),
    pins: (state.entities.pins),
    errors: state.errors.session,
    formType: "Create Pin",
});

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    processForm: pin => dispatch(createPin(pin)),
    pinToBoard: boardPin => dispatch(pinToBoard(boardPin)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePinForm));